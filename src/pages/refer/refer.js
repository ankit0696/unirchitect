import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Navbar from '../../components/Navbar'
import ReferForm from './ReferForm'
import Steps from './Steps'
import TnC from './TnC'
import Whatsapp from './Whatsapp'

const refer = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Refer | Unirchitect </title>
                <meta name="description" content="" />
            </Helmet>
            <Navbar where="Refer" />
            <Steps />
            <ReferForm />
            <TnC />
            <Whatsapp />
        </HelmetProvider>
    )
}

export default refer
