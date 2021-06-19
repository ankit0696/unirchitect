import React from 'react'

const ExpertForm = (props) => {

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2" id="expert-form">
            <div className="w-full px-4 py-20 mx-auto xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
                <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">Join as "Empanelled Expert" today</h1>
                <form className="mt-8 space-y-4">

                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Work Location
                        </label>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Work Experience
                        </label>
                        <input
                            type="textArea"
                            name="email_address"
                            id="email_address"
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>

                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        Join Us
                    </button>
                </form>
                <div className="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200">
                    We will get in touch with you shortly.
                </div>
            </div>
            <div className="px-4 py-20 space-y-10 xl:py-32 md:px-40 lg:px-20 xl:px-40">

                {props.features.map((feature, index) => (
                    <div className="flex space-x-3" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-indigo-600">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h2 className="text-xl font-medium text-indigo-600">{feature.name}</h2>
                            <p className="mt-1 text-gray-700">{feature.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>

    )
}

export default ExpertForm
