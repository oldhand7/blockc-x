<p align="center">
    <img src="./public/logo.png?raw=true" alt="Laradock Logo"/>
</p>

<p align="center">
   <a href="https://github.com/HarshBalyan/block-the-doc/issues"><img src="https://img.shields.io/github/issues/HarshBalyan/block-the-doc.svg" alt="GitHub issues"></a>
    <a href="https://raw.githubusercontent.com/HarshBalyan/block-the-doc/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license"></a>
</p>

<p align="center"><b>Ethereum DAAP to mint Certificates as NFT</b></p>

---

## Project Overview

Trustless issuance of certificates as NFTs to the recipient on a blockchain(e.g. Ethereum).

### Why?

- Once a certificate has been issued, it will permanently exist on a public ledger(blockchain) as a Non Fungible Token(NFT)
  - Issuer can't retract the certificate
  - Recipient does not have to rely on the issuer to provide a method to verify the certificate
- The underlying certificate attached to an NFT will be stored on a distributed file system(e.g. IPFS)
  - This will remove the need for issuer or recipient to secure an accessible copy of the certificate
  - Document can't be forged as docs are stored against a cryptographic hash which change on any attempt made to change the doc
- Easy verifiability
  - The issuance can easily be tracked using the token on a block explorer(e.g. Etherscan)

## Technology Stack

- React frontend: Front end application which uses [React Js](https://github.com/facebook/react/).
- [Hardhat](https://hardhat.org/): An Ethereum development task runner and testing network.
- [Mocha](https://mochajs.org/): A JavaScript test runner.
- [Chai](https://www.chaijs.com/): A JavaScript assertion library.
- [ethers.js](https://docs.ethers.io/ethers.js/html/): A JavaScript library for interacting with Ethereum.
- [Waffle](https://github.com/EthWorks/Waffle/): To have Ethereum-specific Chai assertions/mathers.
