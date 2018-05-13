import factory from '../ethereum/factory.js'
import React, { Component } from 'react';

class CampaignIndex extends Component {

  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    console.log(campaigns);
  } 
  render() {
    return (
      <div>Campaigns index</div>
    );
  }
}

export default CampaignIndex;