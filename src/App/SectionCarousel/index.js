import React from 'react'
import Section from '../Section'
import ImageCarousel from '../ImageCarousel'
import SectionList from '../SectionList'

export default ({ title, images, listItems }) => (
  <React.Fragment>
    <Section title={title} />
    <ImageCarousel images={images} />
    <SectionList listItems={listItems} />
  </React.Fragment>
)