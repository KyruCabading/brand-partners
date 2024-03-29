import React from "react";
import ParallaxImage from "../ParallaxImage";
import { Card, Typography } from "@material-ui/core";
import Section from "../Section";
import SectionList from "../SectionList";
import SectionCarousel from "../SectionCarousel";
import SectionSwipeable from "../SectionSwipeable";
import Chart from "../Chart";

const style = {
  card: {
    backgroundColor: "rgba(10,10,10)"
  },
  close: {
    color: "white"
  }
};

export default ({ location, history }) => {
  const { outlet, packsSold } = location.state;
  const contract = (
    <Typography>
      Start: {outlet.contractStart}
      <br />
      End: {outlet.contractEnd}
    </Typography>
  );

  const getArrayFromString = string => {
    return string.replace(/^\s*|\s*$/g, "").split(/\s*,\s*/);
  };

  const reamsSoldPerMonth = packsSold.map(month => {
    const packsSold = month[outlet.slug];
    return packsSold;
  });

  const sumReamsSoldPerMonth = reamsSoldPerMonth.reduce((total, item) => {
    return total + item;
  });
  window.scrollTo(0, 0);

  return (
    <div>
      <Card style={style.card}>
        <ParallaxImage outlet={outlet} goBack={history.goBack} />

        <SectionSwipeable content={outlet.about} />

        <SectionCarousel
          title="Partnership"
          images={getArrayFromString(outlet.brandingImages)}
          listItems={getArrayFromString(outlet.brandingItems)}
        />

        {/* {outlet.trainingImages && (
          <SectionCarousel
            title="Training"
            images={getArrayFromString(outlet.trainingImages)}
            listItems={getArrayFromString(outlet.trainingItems)}
          />
        )} */}

        <SectionList
          title="Primary Consumer Segments"
          listItems={getArrayFromString(outlet.segments)}
        />

        {outlet.contractStart && (
          <Section title="Contract Details" content={contract} />
        )}

        {/* Start of Chart */}
        {/* {true && (
          <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
            <Section
              title="Organic Sales"
              content={`Total Packs Sold: ${sumReamsSoldPerMonth}`}
            />
            <Chart
              data={packsSold}
              dataName="month"
              y1Name="Total Packs Sold"
              y1={outlet.slug}
            />
          </div>
        )} */}

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
