import React from 'react'
import CarrersForm from '../components/CarrersForm'
import CarrersHero from '../components/CarrersHero'
import Navbar from '../components/Navbar'
import { carrerData } from '../data/dataHome'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const carrers = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Carrers | Unirchitect </title>
                <meta name="description" content="To tap the sky , to a pathway of learning and experience. A Union , so we can soar!
                 Join us.Join this journey of growth." />

            </Helmet>
            <Navbar where="Careers" />
            <CarrersHero carrerData={carrerData} />
            <CarrersForm />
        </HelmetProvider>
    )
}


export default carrers
