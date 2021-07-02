import React from 'react'

const Steps = () => {
    return (


        <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">

                        <span className="relative">Refer and Earn!</span>
                    </span>

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Refer Unirchitect to your family and friends and earn up to
                </p>
                <h3 className="mt-2 text-4xl font-extrabold sm:text-5xl xl:text-6xl text-indigo-600">
                    ₹ 20,000
                </h3>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Spread the word</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            1
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        Refer someone by filling the below form & give us their details and we’ll do the rest.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Track</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            2
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        Track the progress of your referred projects within your referrals dashboard or Unirchitect Whatsapp group.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Earn</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            3
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        You will get paid once your referee pays 50% of the project value.
                    </p>
                </div>
            </div>
            <div className="text-center md:pt-10">
                <a
                    href="#refer-form"
                    aria-label="Scroll down"
                    className="animate-bounce flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                    >
                        <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                    </svg>
                </a>
            </div>
        </div>

    )
}

export default Steps