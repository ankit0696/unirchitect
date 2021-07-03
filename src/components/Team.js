import React from 'react'


const Team = (props) => {
    return (
        <section className="py-6 dark:bg-coolGray-800 dark:text-coolGray-100" id="team">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase text-indigo-600">Building team</p>
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
                <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around mt-20">
                    {props.members.map((member) => (
                        <div key={member.name} className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src={`/images/team/${member.img}`} alt={member.name}
                                            className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 my-16 ">
                                    <div className="font-bold text-3xl text-center pb-1">{member.name}</div>
                                    <p className="text-gray-800 text-sm text-center">{member.position}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Team
