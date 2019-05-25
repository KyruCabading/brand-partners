import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParallaxImage from "../ParallaxImage";

import { Typography } from "@material-ui/core";

class OutletsContainer extends Component {
  renderOutlets = outlets => {
    return outlets.map(outlet => (
      <Link
        key={outlet.id}
        to={{
          pathname: `/outlet/${outlet.slug}`,
          state: {
            outlet,
            packsSold: this.props.packsSold
          }
        }}
      >
        <ParallaxImage key={outlet.id} outlet={outlet} />
      </Link>
    ));
  };

  render() {
    const { outlets } = this.props;
    if (outlets) {
      return (
        <React.Fragment>
          {this.renderOutlets(outlets)}
          <Typography variant="caption" className="gov-warning">
            <div>.</div>
            Government Warning:
            <div>Cigarette Smoking is dangerous to your health.</div>
            <div>.</div>
          </Typography>
        </React.Fragment>
      );
    }
    return null;
  }
}

export default OutletsContainer;
