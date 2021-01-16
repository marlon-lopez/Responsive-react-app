import React from 'react'
import InfoSection from '../components/InfoSection/InfoSection'
//data
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './HomeData'

const HomePage = () => {
  return (
    <>
      <InfoSection {...homeObjOne}></InfoSection>
      <InfoSection {...homeObjTwo}></InfoSection>
      <InfoSection {...homeObjThree}></InfoSection>
      <InfoSection {...homeObjFour}></InfoSection>
    </>
  )
}

export default HomePage
