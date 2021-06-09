import React from 'react'
import Hero from '../components/Hero'
import Details from '../components/Details'
import Category from '../components/Category'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Award from '../components/Award'
import Team from '../components/Team'
import GetReady from '../components/GetReady'
import { members, categories, features, testimonials, hero, testimonialsText, awards, details } from '../data/dataHome'



const Home = () => {
    return (
        <>
            <Hero hero={hero} />
            <Details details={details} />
            <Category categories={categories} />
            <Services features={features} />
            <GetReady />
            <Testimonial testimonials={testimonials} testimonialsText={testimonialsText} />
            <Award awards={awards} />
            <Team members={members} />
        </>
    )
}

export default Home
