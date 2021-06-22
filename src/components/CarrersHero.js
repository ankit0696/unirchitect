import React from 'react'

const CarrersHero = (props) => {

    return (
        <div className="px-4 py-2 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-6 lg:py-8">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    {props.carrerData.carrerHeroTitle}
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    {props.carrerData.carrerHeroDesc}
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
                <div className="grid grid-cols-2 gap-5">
                    <img
                        className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
                        src="/images/carrer/carrer1.webp"
                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="/images/carrer/carrer2.webp"

                        alt=""
                    />
                    <img
                        className="object-cover w-full h-48 rounded shadow-lg"
                        src="/images/carrer/carrer3.webp"
                        alt=""
                    />
                </div>
                <div className="flex flex-col justify-center">
                    {props.carrerData.carrerHero.map((point, index) => (
                        <div key={index} className="mb-4 p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:translate-x-3 hover:border-indigo-600">
                            <h6 className="mb-2 font-semibold leading-5">
                                {point.title}
                            </h6>
                            <p className="text-sm text-gray-900">
                                {point.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CarrersHero
