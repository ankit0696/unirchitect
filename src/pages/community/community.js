import React from 'react'
import Navbar from '../../components/Navbar'
import { blogs } from '../../data/dataCommunity'
import Blog from './Blog'

const community = (props) => {
    return (
        <>
            <Navbar />
            <Blog blogs={blogs} />

        </>
    )
}

export default community
