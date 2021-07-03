import React from 'react'

const Footer = () => {
    return (
        <section id="footer" className="bg-indigo-50">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <a href="/" aria-label="Go home" title="Company" className="inline-flex items-center">
                            <img src="/images/logo.png" className="h-12" alt="unirchitect logo" />
                            <span className=" ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Unirchitect</span>
                        </a>
                        <div className="mt-6 lg:max-w-sm">
                            <p className="text-sm text-gray-800">
                                Architecture Consultancy & More.
                            </p>
                            <p className="mt-4 text-sm text-gray-800 font-bold">
                                Company: Sister firm
                            </p>
                            <p className="mt-4 text-sm text-gray-800">
                                Familia decor and engineering LLP
                            </p>
                            <p className="mt-4 text-sm text-gray-800">
                                Fujitech elevator Pvt. Ltd.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Phone:</p>
                            <a href="tel:+91 9779125995" aria-label="Our phone" title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+91
                                9779125995</a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-gray-800">Email:</p>
                            <a href="mailto:unirchitect@gmail.com" aria-label="Our email" title="Our email"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">unirchitect@gmail.com</a>
                        </div>
                        {/* <!-- <div className="flex">
                            <p className="mr-1 text-gray-800">Address:</p>
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"
                                aria-label="Our address" title="Our address"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                312 Lovely Street, NY
                        </a>
                        </div> --> */}
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide text-gray-900">Social</span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a href="https://www.youtube.com/channel/UCM_utyXjXw271FsQXLs5Zvw" target="_blank" rel="noopener noreferrer"
                                className="text-gray-500 transition-colors duration-300 hover:text-indigo-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -77 512.00213 512" className="h-6">
                                    <path
                                        d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0"
                                        fill="currentColor" />
                                    <path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/unirchitect/" target="_blank" rel="noopener noreferrer"
                                className="text-gray-500 transition-colors duration-300 hover:text-indigo-600">
                                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                                    <circle cx="15" cy="15" r="4"></circle>
                                    <path
                                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/UNIRCHITECT" target="_blank" rel="noopener noreferrer"
                                className="text-gray-500 transition-colors duration-300 hover:text-indigo-600">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path
                                        d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        {/* <!-- <p className="mt-4 text-sm text-gray-500">
                            Bacon ipsum dolor amet short ribs pig sausage prosciutto chicken spare ribs salami.
                    </p> --> */}
                    </div>
                </div>
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                    <p className="text-sm text-gray-600">
                        © Copyright 2021 Unirchitect. All rights reserved.
                    </p>
                    {/* <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                        <li>
                            <a href="/"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">F.A.Q</a>
                        </li>
                        <li>
                            <a href="/"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            Policy</a>
                        </li>
                        <li>
                            <a href="/"
                                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Terms
                            &amp; Conditions</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </section>
    )
}

export default Footer
