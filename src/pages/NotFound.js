import React from 'react'
import Navbar from '../components/Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className="px-4 py-20 mx-auto max-w-7xl">

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <div className="max-w-xl mb-6 md:pr-5">
                                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-indigo-600 sm:text-4xl sm:leading-none">
                                    Page not found (404)
                                </h2>
                                <p className="text-base text-gray-700 md:text-lg ">
                                    The page you're looking for may have moved or no longer exists. Head back to our <a href="/" className="underline text-indigo-600">homepage</a>
                                </p>
                            </div>
                        </div>
                        <div>
                            <img
                                className="object-cover w-full h-56 rounded sm:h-96"
                                src="/images/404.svg"
                                alt="not found"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default NotFound
