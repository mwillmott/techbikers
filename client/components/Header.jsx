import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import classNames from "classnames";

import styles from "../styles/Header";

export default class Header extends Component {
  static propTypes = {
    menu: PropTypes.array
  };

  static defaultProps = {
    menu: [{
      title: "Rides",
      route: "/rides"
    }, {
      title: "About",
      route: "/about"
    }, {
      title: "Sponsors",
      route: "/sponsors"
    }, {
      title: "Charity",
      route: "/the_charity"
    }]
  };

  render() {
    const { menu } = this.props;

    return (
      <header role="header" className={styles.Header}>
        <nav className={styles.navigation}>
          <Link id="logo" to="/" className={styles.navigationItem}>
            <img src="/static/img/logo@2x.png" alt="TechBikers" width="125" />
          </Link>

          {menu.map(item => {
            return <Link key={item.route} to={item.route} className={styles.navigationItem} activeClassName={styles.navigationItemActive}>{item.title}</Link>;
          })}

          <a href="http://blog.techbikers.com/" className={styles.navigationItem}>Blog</a>

          <Link className={classNames(styles.donateButton, {"btn btn-green": true})} to="/donate">Donate!</Link>
        </nav>
      </header>
    );
  }
}