import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { FormattedNumber } from "react-intl";

import { getUserById } from "../actions/user";

import Avatar from "../components/Avatar";
import Button from "../components/Button";

const mapStateToProps = (state, ownProps) => {
  const { user } = ownProps;
  return {
    userObject: state.entities.user ? state.entities.user[user] : null
  };
}

@connect(mapStateToProps)
export default class Fundraiser extends Component {
  static propTypes = {
    fundraiser: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
    userObject: PropTypes.object
  };

  componentWillMount() {
    const { dispatch, user, userObject } = this.props;

    if (!userObject) {
      dispatch(getUserById(user));
    }
  }

  render() {
    const { currency, totalRaised, pageUrl, position, userObject: user } = this.props;

    return (
      <div className="fundraiser">
        <span className={`fundraiser-position position-${position}`}>
          {position || ""}
        </span>

        <Avatar {...user} />

        <div className="fundraiser-details">
          <h3>{user ? user.name : "loading..."}</h3>
          <p>
            <FormattedNumber style="currency" currency={currency} value={totalRaised} /> <span>raised so far</span>
          </p>
        </div>

        <Button href={pageUrl} className="fundraiser-sponsor-button">
          Sponsor now
        </Button>

        {user &&
          <Link to={`/riders/${user.id}`} className="fundraiser-link" />}
      </div>
    );
  }
}