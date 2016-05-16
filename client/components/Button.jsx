import React, { Component, PropTypes } from "react";
import { Link } from "react-router";
import classNames from "classnames";

import styles from "../styles/button";

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    block: PropTypes.bool,
    fill: PropTypes.bool,
    color: PropTypes.oneOf(["offWhite", "grey", "red", "yellow", "blue", "purple", "green"])
  };

  static defaultProps = {
    block: false,
    fill: true,
    color: "green"
  };

  render() {
    const { block, fill, color, className, children, ...props } = this.props;
    const condClasses = {
      [styles.block]: block,
      [styles.noFill]: !fill
    };
    const Element = this.props.href ? "a" : this.props.to ? Link : "button";

    return (
      <Element className={classNames(styles.Button, styles[color], condClasses, className)} {...props}>
        {children}
      </Element>
    );
  }
}
