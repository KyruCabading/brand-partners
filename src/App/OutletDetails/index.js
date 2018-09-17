import React from 'react'
import ParallaxImage from '../ParallaxImage'
import { Card, Typography } from '@material-ui/core'
import Section from '../Section'
import SectionList from '../SectionList'
import SectionCarousel from '../SectionCarousel'

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

        <SectionList title="Primary Consumer Segments" listItems={outlet.segments} />

        <SectionCarousel
          title="Branding"
          images={outlet.execution.images}
          listItems={outlet.execution.items} />

        {outlet.training.images &&
          <SectionCarousel
            title="Training"
            images={outlet.training.images}
            listItems={outlet.execution.items} />}

        {outlet.contract &&
          <Section title="Contract Details">
            <Typography variant="body1">Start:</Typography>
            <Typography variant="body1">End:</Typography>
          </Section>}

        <Typography variant="caption" className="gov-warning">Government Warning: Cigarette Smoking is dangerous to your health.</Typography>
      </Card>
    </div>
  )
}

