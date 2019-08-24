import React from "react";
import { Card, Typography, IconButton } from "@material-ui/core/";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

import Section from "../Section";
import StackedChart from "../Chart/StackedChart";
import Chart from "../Chart";

import data from "../../local/area.json";
import packsSold from "../../local/area-packsSold.json";

const style = {
  actions: {
    button: {
      width: 60,
      height: 60,
      color: "white",
      top: "2vw",
      left: "2vw"
    }
  },

  card: {
    backgroundColor: "rgba(10,10,10)",
    width: "100vw"
  },

  close: {
    color: "white"
  }
};

export default ({ location, history }) => {
  const { goBack } = history;
  window.scrollTo(0, 0);
  return (
    <div>
      <Card style={style.card}>
        {goBack && (
          <IconButton
            style={style.actions.button}
            aria-label="Back"
            onClick={() => goBack()}
          >
            <ArrowBackIos />
          </IconButton>
        )}

        <Section
          title="Organic Sales"
          content="These are the items sold within Makati Philippines in 2019."
        />
        <div style={{ height: 300, width: "100%", paddingBottom: 25 }}>
          <Chart
            data={packsSold}
            dataName="month"
            y1Name="Total Items Sold"
            y1="totalPacksSold"
          />
        </div>

        <Section
          title="Promotion Data"
          content="Promotions are done every Friday & Saturday for partner outlets in Makati."
        />
        <div style={{ height: 300, width: "100%", paddingBottom: 25 }}>
          <StackedChart
            data={data}
            x="run"
            lineA="Red"
            lineB="Blue"
            referenceLine={120}
            referenceLineColor="red"
          />
        </div>

        <div style={{ height: 300, width: "100%" }}>
          <Chart
            data={data}
            dataName="run"
            y1Name="Customer Count"
            y2Name="Trialist"
            y3Name="Contacts"
            y4Name="Investor"
            y1="customerCount"
            y2="trialist"
            y3="smokerContacts"
            y4="scWithPurchase"
            referenceLine={300}
            referenceLineColor="red"
            referenceLine2={240}
            referenceLineColor2="#ffe082"
          />
        </div>

        <Section title="KPIs">
          <Typography>
            98.78% Trial Rate - Trialist / Contacts <br />
            19.00% Strike Rate - Investor / Contacts: <br />
          </Typography>
        </Section>

        <Typography variant="caption" className="gov-warning">
          <div>.</div>
          Brand Partners:
          <div>Enjoy!</div>
          <div>.</div>
        </Typography>
      </Card>
    </div>
  );
};
