import React from 'react'
import Navbar from '../components/Navbar'
import { experts, features } from '../data/dataExpert'
import ExpertHero from '../components/ExpertHero'
import ExpertFeature from '../components/ExpertFeature'
import ExpertTeam from '../components/ExpertTeam'
import ExpertForm from '../components/ExpertForm'


const expert = () => {
    return (
        <>
            <Navbar where="Experts" />
            <ExpertHero />
            <ExpertFeature features={features} />
            <ExpertTeam experts={experts} />
            <ExpertForm />
        </>
    )
}

export default expert
