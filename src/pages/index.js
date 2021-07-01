import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from '../components/Hero'
import Details from '../components/Details'
import Category from '../components/Category'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import Award from '../components/Award'
// import Team from '../components/Team'
import GetReady from '../components/GetReady'
import { categories, features, testimonials, hero, testimonialsText, awards, details } from '../data/dataHome'



const Home = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Unirchitect | Architecture Consultancy - Online Conferencing | We provide Architectural, Structural, Vastu
                    consultancy, e.t.c. Clear your doubts with our experts over conferencing. Our solution makes your home/building
                    perfect. Schedule an appointment with an expert.</title>
                <meta name="description" content="We provide Architectural, Structural, Vastu consultancy, e.t.c.
         Clear your doubts with our experts over conferencing. Our solution that make your home/building perfect. 
         Schedule an appointment with an expert. Free." />
                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            </Helmet>
            <Hero hero={hero} />
            <Details details={details} />
            <Category categories={categories} />
            <Services features={features} />
            <GetReady />
            <Testimonial testimonials={testimonials} testimonialsText={testimonialsText} />
            <Award awards={awards} />
            {/* <Team members={members} /> */}
        </HelmetProvider>
    )
}

export default Home
