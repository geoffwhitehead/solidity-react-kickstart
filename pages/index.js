import factory from "../ethereum/factory.js";
import React, { Component } from "react";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  render() {
    return <div>{this.props.campaigns[0]}</div>;
  }
}

export default CampaignIndex;
