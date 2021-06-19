import React from 'react'
import Navbar from '../components/Navbar'
import { experts, features, hero } from '../data/dataExpert'
import ExpertHero from '../components/ExpertHero'
import ExpertTeam from '../components/ExpertTeam'
import ExpertForm from '../components/ExpertForm'


const expert = () => {
    return (
        <>
            <Navbar where="Experts" />
            <ExpertHero hero={hero} />
            <ExpertTeam experts={experts} />
            <ExpertForm features={features} />
        </>
    )
}

export default expert
