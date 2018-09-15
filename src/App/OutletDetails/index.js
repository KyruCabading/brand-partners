import React from 'react'
import Card from '@material-ui/core/Card'
import ParallaxImage from '../ParallaxImage'
import Executions from '../Executions'
import { Typography } from '@material-ui/core'
import Section from '../Section'

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
        <Section title="Categories">
          <Typography variant="body1">{outlet.categories.join(', ')}</Typography>
        </Section>
        <Section title="Location">
          <Typography variant="body1">{outlet.address}</Typography>
        </Section>
        <Section title="About the Outlet">
          <Typography variant="body1">{outlet.about}</Typography>
        </Section>


        <Section>
          <Typography variant="body2">Executions</Typography>
        </Section>
        <Executions outlet={outlet} />

      </Card>
    </div>
  )
}

