import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'

const Blog = ({ match }) => {
    useEffect(() => {
        console.log(match)
    }, [match])
    return (
        <>
            <Navbar />
            <section className="relative px-10 md:p-0">
                <img className="xl:max-w-6xl" src="https://images.pexels.com/photos/5990153/pexels-photo-5990153.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1860" alt="" />
                <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                    <div className="flex justify-between font-bold text-sm">
                        <p>Product Review</p>
                        <p className="text-gray-400">17th March, 2021</p>
                    </div>
                    <h2 className="text-3xl font-semibold mt-4 md:mt-10">Coffee From Heaven</h2>
                    <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aperiam nulla cupiditate saepe sed quis veritatis minus rem adipisci aliquid.</p>

                </div>
            </section>
        </>
    )
}

export default Blog
