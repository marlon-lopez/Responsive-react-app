import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
import Pricing from '../components/pricing/Pricing'
//data
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeData'

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
      <Pricing />
    </>
  )
}

export default HomePage
