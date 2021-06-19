import React from 'react'
import Navbar from './Navbar'

const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className="px-4 py-20 mx-auto max-w-7xl">
                <div className="w-full mx-auto lg:w-1/3">
                    <p title="Unirchitect Home Page" className="flex items-center">
                        <img src='/images/404.svg' className='h-25' alt='Page Not Found' />
                    </p>
                    <p className="mt-10 mb-3 text-xl font-bold text-indigo-600 md:text-2xl">Page not found (404)</p>
                    <p className="mb-3 text-base font-medium text-gray-700">
                        The page you're looking for may have moved or no longer exists. Head back to our <a href="/" className="underline text-indigo-600">homepage</a>
                    </p>
                </div>
            </section>
        </>

    )
}

export default NotFound
