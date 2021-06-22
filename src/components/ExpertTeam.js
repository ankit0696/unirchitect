import React from 'react'

const ExpertTeam = (props) => {
    return (
        <section className='pt-14 pb-5 ' id='experts'>
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex flex-wrap justify-center text-center mb-16'>
                    <div className='w-full lg:w-6/12 px-4'>
                        <h1 className='text-gray-900 text-4xl font-bold mt-0 mb-2'>
                            Here are our experts
                        </h1>
                        <p className='text-blue-gray-700 text-lg font-light leading-relaxed mt-6 mb-1'>
                            Each expert of the Committee is highly related to the practical field with innovative thinking, and thanks to their experience, we are able to
                            provide excellent service to our clients.
                        </p>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {props.experts.map((member, index) => (
                        <div className='w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4' key={index}>
                            <div className='px-6'>
                                <img
                                    alt={member.name}
                                    src={`/images/experts/${member.img}`}
                                    className='rounded-xl shadow-lg max-w-full h-auto align-middle border-none undefined'
                                />
                                <div className='pt-6 text-center'>
                                    <h1 className='text-gray-900 text-xl font-bold leading-normal capitalize mt-0 mb-2'>
                                        {member.name}
                                    </h1>
                                    {/* <p className='text-indigo-700 text-base font-light leading-relaxed mt-0 mb-4'>
                                        {member.domain}

                                    </p> */}
                                    <p className='text-indigo-700 text-base font-semibold leading-relaxed mt-0 mb-4'>
                                        {member.experience}

                                    </p>
                                    <div className='flex items-center justify-center'>
                                        <button className='false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined'>
                                            <i className='fab fa-twitter undefined text-lg'></i>
                                        </button>
                                        <button className='false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined'>
                                            <i className='fab fa-facebook-f undefined text-lg'></i>
                                        </button>
                                        <button className='false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined'>
                                            <i className='fab fa-dribbble undefined text-lg'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExpertTeam
