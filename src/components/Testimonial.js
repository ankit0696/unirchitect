import React from 'react'

const Testimonial = (props) => {
    return (
        <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                        <h2 className="text-4xl font-bold text-indigo-600">{props.testimonialsText.title}</h2>
                        <p className="dark:text-coolGray-400">{props.testimonialsText.description}</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div className="grid content-center gap-4">
                                {props.testimonials.slice(0, props.testimonials.length / 2).map((testimonial) => (
                                    <div className="p-6 rounded shadow-md dark:bg-coolGray-900">
                                        <p>{testimonial.description}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={`/images/clients/${testimonial.image}`} alt="{testimonial.name}" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-lg font-semibold">{testimonial.name}</p>
                                                <p className="text-sm dark:text-coolGray-400">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid content-center gap-4">
                                {props.testimonials.slice(props.testimonials.length / 2).map((testimonial) => (
                                    <div className="p-6 rounded shadow-md dark:bg-coolGray-900">
                                        <p>{testimonial.description}</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={`/images/clients/${testimonial.image}`} alt="{testimonial.name}" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-lg font-semibold">{testimonial.name}</p>
                                                <p className="text-sm dark:text-coolGray-400">{testimonial.location}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Testimonial
