import React from 'react'
import CallToActionBtn from './CallToActionBtn'

const GetReady = () => {
    /* This example requires Tailwind CSS v2.0+ */
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-indigo-600">Book your free appointment.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <CallToActionBtn />
                </div>
            </div>
        </div>
    )
}


export default GetReady

