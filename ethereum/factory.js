import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9c145E4EB1D1348ce731104Db3BD2666e64C2643'
);

export default instance;