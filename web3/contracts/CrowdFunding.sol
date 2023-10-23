// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CrowdFunding {

    struct Campaign {
        uint256 id;
        address owner;
        string title;
        string description;
        string image;
        uint256 fundingGoal;
        uint256 fundingRaised;
        uint256 deadline;
        address[] donators;
        uint256[] donations;
    }

    mapping(uint256 => Campaign) public campaigns;
    uint256 public campaignsCount = 0;

    constructor() {}

    function createCampaign(
        address _owner,
        string memory _title,
        string memory _description,
        uint256 _fundingGoal,
        uint256 _deadline,
        string memory _image
    ) public returns (uint256) {
        Campaign storage campaign = campaigns[campaignsCount];
        require(campaign.deadline < block.timestamp, "The deadline should be a future date.");

        campaign.owner = _owner;
        campaign.title = _title;
        campaign.description = _description;
        campaign.fundingGoal = _fundingGoal;
        campaign.fundingRaised = 0;
        campaign.deadline = _deadline;
        campaign.image = _image;

        campaignsCount++;
        return campaignsCount - 1;
    }

    function donateToCampaign(uint256 _campaignId) public payable{
        uint256 fund = msg.value;
        Campaign storage campaign = campaigns[_campaignId];
        campaign.donators.push(msg.sender);
        campaign.donations.push(fund);

        (bool sent, ) = payable(campaign.owner).call{value: fund}("");
        if (sent) {
            campaign.fundingRaised = campaign.fundingRaised + fund;
        }
    }

    function getDonators(uint256 _campaignId) view public returns (address[] memory, uint256[] memory) {
        return (campaigns[_campaignId].donators, campaigns[_campaignId].donations);
    }

    function getCampaigns() view public returns (Campaign[] memory ) {
        Campaign[] memory allCampaigns = new Campaign[](campaignsCount);
        for (uint i = 0; i < campaignsCount; i++) {
            Campaign storage item = campaigns[i];
            allCampaigns[i] = item;
        }
        return allCampaigns;
    }
}
