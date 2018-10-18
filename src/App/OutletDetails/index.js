import React from 'react'
import ParallaxImage from '../ParallaxImage'
import { Card, Typography } from '@material-ui/core'
import Section from '../Section'
import SectionList from '../SectionList'
import SectionCarousel from '../SectionCarousel'
import SectionTable from '../SectionTable'
import Chart from '../Chart';

import packsSold from '../../local/area-packsSold.json'

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

  // Contract Mess
  const startOfContract = outlet.contract && outlet.contract.start
  const endOfContract = outlet.contract && outlet.contract.end
  const contractExists = outlet.contract && startOfContract !== "N/A"
  const contract = <Typography>
    Start: {startOfContract}
    <br />
    End: {endOfContract}
  </Typography>

  // Array of images
  const getArrayOfImages = (type = 'branding', numberOfImages = 0) => {
    const arrayOfImages = []
    for (var i = 1; i < numberOfImages + 1; i++) {
      const imageUrl = `/photos/${outlet.slug}/${type}/${i}.jpg`
      arrayOfImages.push(imageUrl)
    }
    return arrayOfImages
  }
  const brandingPhotos = getArrayOfImages('branding', outlet.execution.numberOfImages)
  const trainingPhotos = getArrayOfImages('productTraining', outlet.training.numberOfImages)

  const reamsSoldPerMonth = packsSold.map(month => {
    const packsSold = month[outlet.slug]
    return packsSold
  })

  const sumReamsSoldPerMonth = reamsSoldPerMonth.reduce((total, item) => { return total + item })
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
          images={brandingPhotos}
          listItems={outlet.execution.items} />

        {outlet.training.numberOfImages > 0 &&
          <SectionCarousel
            title="Training"
            images={trainingPhotos}
            listItems={outlet.training.items} />}

        {contractExists &&
          <Section
            title="Contract Details"
            content={contract} />}

        <Section
          title="Foot traffic"
          content={outlet.footTraffic} />

        {/* Start of Chart */}
        {true &&
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
        }

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

