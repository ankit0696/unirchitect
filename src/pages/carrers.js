import React from 'react'
import { Helmet } from 'react-helmet'
import CarrersForm from '../components/CarrersForm'
import CarrersHero from '../components/CarrersHero'
import Navbar from '../components/Navbar'
import { carrerData } from '../data/dataHome'

const carrers = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Carrers | Unirchitect </title>
                <meta name="description" content="To tap the sky , to a pathway of learning and experience. A Union , so we can soar!
                 Join us.Join this journey of growth." />

            </Helmet>
            <Navbar where="Careers" />
            <CarrersHero carrerData={carrerData} />
            <CarrersForm />
        </>
    )
}


export default carrers
