import React from 'react'

const Award = (props) => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2
                    className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg viewBox="0 0 52 24" fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                            <defs>
                                <pattern id="df31b9f6-a505-42f8-af91-d2b7c3218e5c" x="0" y="0" width=".135" height=".30">
                                    <circle cx="1" cy="1" r=".7"></circle>
                                </pattern>
                            </defs>
                            <rect fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)" width="52" height="24"></rect>
                        </svg>
                        <span className="relative">Awards&nbsp;</span>
                    </span>
                 & Recognitions
            </h2>
            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-2">
                {props.awards.map((award) => (
                    <div key={award.name} className="sm:text-center">
                        <div
                            className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                            <img src={`images/awards/${award.image}`} alt={award.name} />
                        </div>
                        <h6 className="mb-2 font-semibold leading-5">{award.name}</h6>
                        <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            {award.description}
                        </p>
                        {award.learnMore &&
                            <a href="{award.learnMoreUrl}" target="_blank" aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Learn more
                            </a>
                        }

                    </div>
                ))}

                {/* <!-- <div className="sm:text-center">
                            <div
                                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
                                <svg className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" stroke="currentColor"
                                    viewBox="0 0 52 52">
                                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                            <h6 className="mb-2 font-semibold leading-5">Pick up truck</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                                Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i mechad
                </p>
                            <a href="/" aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn
                    more</a>
                        </div> --> */}
            </div>
        </div>
    )
}

export default Award
