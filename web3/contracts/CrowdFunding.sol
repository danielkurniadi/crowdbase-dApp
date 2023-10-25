// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Crowdfunding is Ownable {
    enum CampaignStatus { Ongoing, Successful, Failed }

    struct Campaign {
        address owner;
        string title;
        string description;
        string bannerImageUrl;
        string profileImageUrl;
        uint256 fundingGoal;
        uint256 deadline;
        uint256 totalFunds;
        CampaignStatus status;
        mapping(address => uint256) donations;
    }

    uint256 public campaignCount;
    mapping(uint256 => Campaign) public campaigns;

    event CampaignCreated(uint256 indexed campaignId, address indexed owner, string title);
    event DonationReceived(uint256 indexed campaignId, address indexed donor, uint256 amount);
    event CampaignFinalized(uint256 indexed campaignId, CampaignStatus status);

    modifier onlyCampaignOwner(uint256 campaignId) {
        require(msg.sender == campaigns[campaignId].owner, "Only the campaign owner can call this function");
        _;
    }

    function createCampaign(
        string memory _title,
        string memory _description,
        string memory _bannerImageUrl,
        string memory _profileImageUrl,
        uint256 _fundingGoal,
        uint256 _deadline
    ) external {
        require(_fundingGoal > 0, "Funding goal must be greater than 0");
        require(_deadline > block.timestamp, "Deadline must be in the future");

        uint256 campaignId = campaignCount++;
        Campaign storage newCampaign = campaigns[campaignId];
        newCampaign.owner = msg.sender;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.bannerImageUrl = _bannerImageUrl;
        newCampaign.profileImageUrl = _profileImageUrl;
        newCampaign.fundingGoal = _fundingGoal;
        newCampaign.deadline = _deadline;
        newCampaign.status = CampaignStatus.Ongoing;

        emit CampaignCreated(campaignId, msg.sender, _title);
    }

    function donate(uint256 campaignId, uint256 amount) external payable {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.status == CampaignStatus.Ongoing, "Campaign is not ongoing");
        require(msg.value >= amount, "Not enough ether sent");
        require(block.timestamp < campaign.deadline, "Campaign deadline reached");
        require(amount > 0, "Donation amount must be greater than 0");

        campaign.donations[msg.sender] += amount;
        campaign.totalFunds += amount;

        emit DonationReceived(campaignId, msg.sender, amount);

        if (campaign.totalFunds >= campaign.fundingGoal) {
            // Campaign reached its funding goal
            campaign.status = CampaignStatus.Successful;
        }
    }

    function finalizeCampaign(uint256 campaignId) external onlyCampaignOwner(campaignId) {
        Campaign storage campaign = campaigns[campaignId];
        require(campaign.status == CampaignStatus.Ongoing, "Campaign is not ongoing");
        require(block.timestamp >= campaign.deadline, "Campaign deadline not reached yet");

        if (campaign.totalFunds >= campaign.fundingGoal) {
            // Transfer funds to the campaign owner
            payable(campaign.owner).transfer(campaign.totalFunds);
            campaign.status = CampaignStatus.Successful;
        } else {
            // Refund donations to contributors
            address contributor;
            uint256 amount;
            for (uint256 i = 0; i < campaignCount; i++) {
                contributor = address(uint160(i));
                amount = campaign.donations[contributor];
                if (amount > 0) {
                    payable(contributor).transfer(amount);
                }
            }
            campaign.status = CampaignStatus.Failed;
        }

        emit CampaignFinalized(campaignId, campaign.status);
    }
}
