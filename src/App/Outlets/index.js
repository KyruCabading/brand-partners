import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParallaxImage from "../ParallaxImage";

import { Typography } from "@material-ui/core";

class OutletsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outlets: null,
      packsSold: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch("https://api.sheety.co/f69fcf65-e2ef-4740-a6fd-bcc8a3133561")
      .then(response => response.json())
      .then(packsSold => this.setState({ packsSold }));

    fetch("https://api.sheety.co/627ab202-2874-49bc-acb6-36d44321d0ea")
      .then(response => response.json())
      .then(outlets => this.setState({ outlets }));
  };

  renderOutlets = outlets => {
    return outlets.map(outlet => (
      <Link
        key={outlet.id}
        to={{
          pathname: `/outlet/${outlet.slug}`,
          state: {
            outlet,
            packsSold: this.state.packsSold
          }
        }}
      >
        <ParallaxImage key={outlet.id} outlet={outlet} />
      </Link>
    ));
  };

  render() {
    const { outlets } = this.state;
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
