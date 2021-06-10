import React from 'react'

const Details = (props) => {
    return (
        <section className="">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                                Our one firm ethos saves <span className="text-indigo-600">time{' '}</span>
                                <br className="hidden md:block" />
                  cut <span className="text-indigo-600">cost</span> and deliver <span className="text-indigo-600">innovation</span>
                                {' '}
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-indigo-200" />
                                    <span className="relative inline-block text-indigo-600">
                                        {/* a lazy dog */}
                                    </span>
                                </span>
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                {props.details.description}
                            </p>
                        </div>
                        <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                            {props.details.points.map((point) => (

                                <div key={point.title} className="bg-white border-l-4 shadow-sm border-indigo-600">
                                    <div className="h-full p-5 border border-l-0 rounded-r">
                                        <h6 className="mb-2 font-semibold leading-5">
                                            {point.title}
                                        </h6>
                                        <p className="text-sm text-gray-900">
                                            {point.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            className="object-cover w-full h-56 rounded sm:h-96"
                            src="/images/stats.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Details
