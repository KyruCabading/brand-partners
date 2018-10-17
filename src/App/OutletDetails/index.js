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
  console.log(trainingPhotos)
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

        <Section
          title="Foot traffic"
          content={outlet.footTraffic} />

        <Section
          title="Reams per month"
          content={outlet.volume} />

        {contractExists &&
          <Section
            title="Contract Details"
            content={contract} />}

        {outlet.data &&
          <div style={{ height: 300, width: "100%", paddingBottom: 50 }}>
            <Section
              title="Barhop Data"
              content="Volume: 250 monthly" />
            <Chart
              data={outlet.data}
              y1="Barhop"
              y2="Outlet"
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

