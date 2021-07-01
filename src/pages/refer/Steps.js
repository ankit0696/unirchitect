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
                <h3 className="mt-2 text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                    ₹ 20,000
                </h3>
            </div>
            <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-3">
                <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
                    <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Believe</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            1
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                        flail 180 berm.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Be yourself</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            2
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart attack never
                        stopped.
                    </p>
                </div>
                <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-lg font-bold leading-5">Just do it</p>
                        <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-indigo-400 bg-indigo-50">
                            3
                        </p>
                    </div>
                    <p className="text-sm text-gray-900">
                        Chase ball of string eat plants, meow, and throw up because I ate
                        plants going.
                    </p>
                </div>
            </div>
            <div className="text-center">
                <a
                    href="/"
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                >
                    Refer Now
                </a>
            </div>
        </div>

    )
}

export default Steps