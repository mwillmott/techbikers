import React, { Component, PropTypes } from "react";
import { autobind } from "core-decorators";

import { createFundraisingPage } from "../actions/fundraiser";

import AuthLogin from "../containers/AuthLogin";
import Button from "./Button";

export default class SetupFundraising extends Component {
  static propTypes = {
    ride: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  @autobind
  createFundraiser() {
    const { dispatch, ride, user } = this.props;
    dispatch(createFundraisingPage(ride.id, user.id));
  }

  render() {
    const { fundraiser } = this.props;

    if (fundraiser) {
      return <Button color="blue" href={fundraiser.pageUrl}>Go to my fundraising page</Button>
    }

    return <AuthLogin backend="justgiving" buttonText="Create Fundraising Page" onAuthSuccess={this.createFundraiser} />
  }
}
