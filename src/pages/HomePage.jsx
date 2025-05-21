import React from 'react'
import Banner from '../components/Banner'
import Facilities from '../components/Facilities'
import FeatureProduct from '../components/FeatureProduct'
import Offer from '../components/Offer'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'

const HomePage = () => {
  return (
   <>
    <Banner/>
    <Facilities/>
    <FeatureProduct/>
    <Offer/>
    <NewProducts/>
    <BestSeller/>
   </>
  )
}

export default HomePage