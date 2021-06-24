import React from 'react'
import Navbar from '../components/Navbar'
import { experts, features, hero } from '../data/dataExpert'
import ExpertHero from '../components/ExpertHero'
import ExpertTeam from '../components/ExpertTeam'
import ExpertForm from '../components/ExpertForm'
import { Helmet } from 'react-helmet'



const expert = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Experts | Unirchitect </title>
                <meta name="description" content="Manifesting excellence and service . Enable with us an advisory engine.
                Welcome to our threshold of success." />

            </Helmet>
            <Navbar where="Experts" />
            <ExpertHero hero={hero} />
            <ExpertTeam experts={experts} />
            <ExpertForm features={features} />
        </>
    )
}

export default expert
