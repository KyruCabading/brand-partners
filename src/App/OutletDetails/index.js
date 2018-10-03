import React from 'react'
import ParallaxImage from '../ParallaxImage'
import { Card, Typography } from '@material-ui/core'
import Section from '../Section'
import SectionList from '../SectionList'
import SectionCarousel from '../SectionCarousel'
import SectionTable from '../SectionTable'
import Chart from '../Chart';


const style = {
  card: {
    backgroundColor: "rgba(10,10,10)"
  },

  close: {
    color: 'white'
  }
}

export default ({ location, history }) => {
  const { outlet } = location.state
  window.scrollTo(0, 0)
  return (
    <div>
      <Card style={style.card}>
        <ParallaxImage outlet={outlet} goBack={history.goBack} />

        <Section
          title="Location"
          content={outlet.address} />

        <Section
          title="About the Outlet"
          content={outlet.about} />

        <Section
          title="Reams per month"
          content="10 Reams" />

        <Section
          title="Foot traffic"
          content="300+ per night" />

        <SectionList title="Primary Consumer Segments" listItems={outlet.segments} />

        <SectionCarousel
          title="Branding"
          images={outlet.execution.images}
          listItems={outlet.execution.items} />

        {outlet.training.images &&
          <SectionCarousel
            title="Training"
            images={outlet.training.images}
            listItems={outlet.training.items} />}

        {outlet.contract &&
          <Section
            title="Contract Details"
            content={outlet.contract} />}

        {outlet.data &&
          <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
            <Section
              title="Reams per month"
              content="Volume: 250 monthly" />
            <Chart
              data={outlet.data} />
          </div>
        }
        <SectionTable />

        <Typography variant="caption" className="gov-warning">
          <div>.</div>
          Government Warning:
          <div>Cigarette Smoking is dangerous to your health.</div>
          <div>.</div>
        </Typography>
      </Card>
    </div>
  )
}

