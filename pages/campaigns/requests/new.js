import React, { Component } from "react";
import { Form, Button, Message, Input } from "semantic-ui-react";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Link, Router } from "../../../routes";
import Layout from "../../../components/Layout";

export default class RequestNew extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: ""
  };
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    const { value, description, recipient } = this.state;
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    const campaign = Campaign(this.props.address);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
        .send({
          from: accounts[0]
        });

      Router.pushRoute(`/campaigns/${this.props.address}/requests`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    const { value, description, recipient, loading, errorMessage } = this.state;
    return (
      <Layout>
        <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>Back</a>
        </Link>
        <h3>Create a Request</h3>
        <Form onSubmit={this.onSubmit} error={!!errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Value in Ether</label>
            <Input
              value={value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={recipient}
              onChange={event =>
                this.setState({ recipient: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={errorMessage} />
          <Button primary loading={loading}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}
