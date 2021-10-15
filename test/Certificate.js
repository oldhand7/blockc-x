const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Certificate Contract", () => {
  let Certificate, contract;
  let issuer, recipient1, recipient2, addresses;
  let ipfsHash = "QmYJu2yroqrX65TY27xSsEtFQr78mGAo4isYm11jGGoiu4";

  beforeEach(async () => {
    Certificate = await ethers.getContractFactory("Certificate");
    [issuer, recipient1, recipient2, ...addresses] = await ethers.getSigners();
    contract = await Certificate.deploy();
  });

  it("Deploys successfully 🚀", async () => {
    expect(await contract.getIssuer()).to.equals(issuer.address);
  });

  it("Ensure only issuer can mint", async () => {
    expect(
      await contract
        .connect(recipient1)
        .mintAndTransfer(recipient1.address, "Rahul", ipfsHash)
    ).to.be.revertedWith("Only issuer can mint!");
  });
});
