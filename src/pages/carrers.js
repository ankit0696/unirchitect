import React from 'react'
import CarrersForm from '../components/CarrersForm'
import CarrersHero from '../components/CarrersHero'
import Navbar from '../components/Navbar'
import { carrerData } from '../data/dataHome'

const carrers = () => {
    return (
        <>
            <Navbar where="Careers" />
            <CarrersHero carrerData={carrerData} />
            <CarrersForm />
        </>
    )
}


export default carrers
