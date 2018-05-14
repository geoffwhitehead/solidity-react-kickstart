import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x74Ec4AfdECA730f17618AA6Af34c5C424336F0f0"
);

export default instance;
