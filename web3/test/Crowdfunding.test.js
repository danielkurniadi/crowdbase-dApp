const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Crowdfunding", function () {
  it("Should create a new campaign", async function () {
    const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.deployed();

    await crowdfunding.createCampaign(
      1635696000,
      ethers.utils.parseEther("10"),
      "Test Campaign",
      "This is a test campaign",
      "https://example.com/banner.jpg",
      "https://example.com/profile.jpg"
    );

    const campaign = await crowdfunding.campaigns(0);
    expect(campaign.title).to.equal("Test Campaign");
  });

  it("Should allow users to donate to a campaign", async function () {
    const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.deployed();

    await crowdfunding.createCampaign(
      1635696000,
      ethers.utils.parseEther("10"),
      "Test Campaign",
      "This is a test campaign",
      "https://example.com/banner.jpg",
      "https://example.com/profile.jpg"
    );

    await crowdfunding.donate(0, { value: ethers.utils.parseEther("1") });
    const campaign = await crowdfunding.campaigns(0);
    expect(campaign.fundsRaised).to.equal(ethers.utils.parseEther("1"));
  });

  it("Should refund donors if the campaign does not reach its goal", async function () {
    const Crowdfunding = await ethers.getContractFactory("Crowdfunding");
    const crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.deployed();

    await crowdfunding.createCampaign(
      1635696000,
      ethers.utils.parseEther("10"),
      "Test Campaign",
      "This is a test campaign",
      "https://example.com/banner.jpg",
      "https://example.com/profile.jpg"
    );

    await crowdfunding.donate(0, { value: ethers.utils.parseEther("1") });
    await crowdfunding.checkCampaign(0);
    const campaign = await crowdfunding.campaigns(0);
    expect(campaign.fundsRaised).to.equal(0);
  });
});