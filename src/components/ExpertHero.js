import React from 'react'

const ExpertHero = (props) => {
    return (
        <>
            <div className='conatiner relative'>
                <div className='px-4 sm:py-6 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                    <div className='grid gap-10 lg:grid-cols-2'>
                        <div className='flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg'>
                            <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400'>
                                <svg className='text-teal-900 w-7 h-7' viewBox='0 0 24 24'>
                                    <polyline
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        points=' 8,5 8,1 16,1 16,5'
                                        strokeLinejoin='round'
                                    />
                                    <polyline
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        points='9,15 1,15 1,5 23,5 23,15 15,15'
                                        strokeLinejoin='round'
                                    />
                                    <polyline
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        points='22,18 22,23 2,23 2,18'
                                        strokeLinejoin='round'
                                    />
                                    <rect
                                        x='9'
                                        y='13'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        width='6'
                                        height='4'
                                        strokeLinejoin='round'
                                    />
                                </svg>
                            </div>
                            <div className='max-w-xl mb-6'>
                                <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                                    Greetings !
                                </h2>
                                <p className='text-base text-gray-700 md:text-lg'>
                                    {props.hero.desc}
                                </p>
                            </div>
                            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                                <div className="inline-flex rounded-md shadow">
                                    <a
                                        href="#expert-form"
                                        className="text-left inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 ease-linear transition-all duration-150"
                                    >
                                        Onboard With Us
                                    </a>
                                </div>
                                <div className="ml-3 inline-flex rounded-md shadow">
                                    <a
                                        href="#experts"
                                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                                    >
                                        See experts
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center -mx-4 lg:pl-8'>
                            <div className='flex flex-col items-end px-3'>
                                <img
                                    className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56'
                                    src='/images/experts/expert-hero-1.webp'
                                    alt='first expert'
                                />
                                <img
                                    className='object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40'
                                    src='/images/experts/expert-hero-2.webp'
                                    alt='second expert'
                                />
                            </div>
                            <div className='px-3'>
                                <img
                                    className='object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80'
                                    src='/images/experts/expert-hero-2.webp'
                                    alt='third expert'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpertHero
