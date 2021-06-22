import React from 'react'

const TnC = () => {
    return (
        <section className="bg-gray-50">
            <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
                <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                    <a href="/" className="mb-4 mr-8">
                        <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-indigo-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </a>
                    <div>
                        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-800 uppercase">
                            T&C's apply

                    </p>
                        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            Cheese on toast tale
                    </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Valid if the minimum order value is ₹3 lacs.
                            When your friend makes 50% payment of their total order value, you'll earn ₹ 15,000
                    </p>
                    </div>
                </div>
            </div>


        </section>


    )
}

export default TnC
