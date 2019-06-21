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
          title="Organic Winston Pack Sales"
          content="These are the Total Packs Sold within Central GMA in 2019."
        />
        <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
          <Chart
            data={packsSold}
            dataName="month"
            y1Name="Total Packs Sold"
            y1="totalPacksSold"
          />
        </div>

        <Section
          title="Eagle 121 Activation Data"
          content="Eagle 121 Activations are done every Friday & Saturday for Winston partner outlets in CGMA."
        />
        <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
          <Section title="KPIs" content="Average Packs sold per run: 120" />
          <StackedChart
            data={data}
            x="run"
            lineA="Red"
            lineB="Blue"
            referenceLine={120}
            referenceLineColor="red"
          />
        </div>
        <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
          <Section>
            <Typography>
              Smoker Contact purchase rate: 23.1% <br />
            </Typography>
          </Section>
          <Chart
            data={data}
            dataName="run"
            y1Name="Customer Count"
            y2Name="Unique Trialist"
            y3Name="Smoker Contacts"
            y1="customerCount"
            y2="uniqueTrialist"
            y3="smokerContacts"
            referenceLine={300}
            referenceLineColor="red"
            referenceLine2={150}
            referenceLineColor2="#ffe082"
          />
        </div>

        <Typography variant="caption" className="gov-warning">
          <div>.</div>
          Government Warning:
          <div>Cigarette Smoking is dangerous to your health.</div>
          <div>.</div>
        </Typography>
      </Card>
    </div>
  );
};
