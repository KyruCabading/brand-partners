import React, { Component } from "react";
import { Link } from "react-router-dom";
import ParallaxImage from "../ParallaxImage";

import { Typography } from "@material-ui/core";

import data from "../../local/outlets.json";

class OutletsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      outlets: null
    };
  }

  componentDidMount() {
    this.fetchData().then(data => this.setState({ outlets: data }));
  }

  fetchData = () => {
    return fetch("https://api.sheety.co/0155da19-ee61-4c7b-ac01-036da6631cfc")
      .then(response => response.json())
      .then(outlets => outlets);
  };

  renderOutlets = outlets => {
    return outlets.map(outlet => (
      <Link
        key={outlet.id}
        to={{
          pathname: `/outlet/${outlet.slug}`,
          state: {
            outlet
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
