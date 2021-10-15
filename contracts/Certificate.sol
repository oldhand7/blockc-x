// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Certificate is ERC721 {
    address private _issuer;

    struct CertificateMeta {
        string name; // name of the recipient
        string fileHash;  // IPFS hash of the file
        uint256 tokenId;
    }

    CertificateMeta[] private certificates;
    
    mapping(address => CertificateMeta[]) private ownedCertificates;
    
    constructor () ERC721("BlockTheDoc Certificate", "BTDC") {
        _issuer = msg.sender;
    }
    
    function myCertificates() public view returns(CertificateMeta[] memory) {
        return ownedCertificates[msg.sender];
    }
    
    // FIX  me for a _tokenId that does not exist
    function certificateDetails(uint256 _tokenId) external view returns(CertificateMeta memory) {
        return certificates[_tokenId];
    }
    
    function issuedCertificates() public view returns(CertificateMeta[] memory) {
        require(_isIssuer(msg.sender), "Only issuer can view the issued certificates!");
        return certificates;
    }

    function getIssuer() public view returns (address) {
        return _issuer;
    }

    function mintAndTransfer(address _recipient, string memory _name, string memory _fileHash) external {
        require(_isIssuer(msg.sender), "Only issuer can mint!");
        
        uint tokenId = certificates.length;
        CertificateMeta memory meta = CertificateMeta({
            name: _name,
            fileHash: _fileHash,
            tokenId: tokenId
        });
        certificates.push(meta);

        _mint(msg.sender, tokenId);
        
        _transfer(msg.sender, _recipient, tokenId);

        CertificateMeta[] storage recipientCertificates = ownedCertificates[_recipient];
        recipientCertificates.push(meta);
        ownedCertificates[_recipient] = recipientCertificates;
    }
    
    function _beforeTokenTransfer(address _from, address _to, uint256 _tokenId) internal virtual override {
        super._beforeTokenTransfer(_from, _to, _tokenId);

        require(_isMint(_from, _tokenId) || _firstTransfer(_from, _tokenId), "Certificate cannot be transferred");
    }
    
    function _isMint(address _from, uint256 _tokenId) private view returns(bool) {
        return (_from == address(0)) && !_exists(_tokenId);
    }
    
    function _firstTransfer(address _from, uint256 _tokenId) private view returns(bool) {
        return (_isIssuer(_from) && (ownerOf(_tokenId) == _from));
    }
    
    function _isIssuer(address _from) private view returns(bool) {
        return (_from == _issuer);
    }
}
