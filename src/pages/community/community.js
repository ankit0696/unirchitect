import React from 'react'
import Navbar from '../../components/Navbar'
import { blogs } from '../../data/dataCommunity'
import Blogs from './Blogs'

const community = (props) => {
    return (
        <>
            <Navbar />
            <Blogs blogs={blogs} />

        </>
    )
}

export default community
