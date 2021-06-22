import React, { useState } from 'react'
import { storage } from '../firebase.js'


const ExpertForm = (props) => {
    const [file, setfile] = useState(null)
    const [name, settName] = useState()
    const [email_address, setemail_address] = useState()
    const [mobile, setmobile] = useState()
    const [work_location, setwork_location] = useState()
    const [work_experience, setwork_experience] = useState()
    const [progress, setProgress] = useState(0)

    const uploadHandler = async (e) => {
        e.preventDefault()

        // let formData = new FormData(e.target)

        const uploadTask = storage.ref(`experts/${name}${work_location}${work_experience}${mobile}${email_address}.pdf`).put(file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref("experts")
                    .child(`${name}${work_location}${work_experience}${mobile}${email_address}.pdf`)
                    .getDownloadURL()
                    .then(url => {
                        // console.log(url)
                    });
            }
        )

        //reset formdata
        settName('')
        setemail_address('')
        setmobile('')
        setwork_experience('')
        setwork_location('')
    }

    return (
        <section className="grid grid-cols-1 lg:grid-cols-2" id="expert-form">
            <div className="w-full px-4 py-20 mx-auto xl:py-32 md:w-3/5 lg:w-4/5 xl:w-3/5">
                <h1 className="mb-4 -mt-3 text-2xl font-extrabold leading-snug tracking-tight text-left text-gray-900 md:text-4xl">Join as "Empanelled Expert" today</h1>
                <form className="mt-8 space-y-4" onSubmit={uploadHandler}>

                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={(e) => settName(e.target.value)}
                            required
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            onChange={(e) => setemail_address(e.target.value)}
                            required
                            autoComplete="email"
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            name="mobile"
                            id="mobile"
                            onChange={(e) => setmobile(e.target.value)}
                            required
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="work_location" className="block text-sm font-medium text-gray-700">
                            Work Location
                        </label>
                        <input
                            type="text"
                            name="work_location"
                            id="work_location"
                            onChange={(e) => setwork_location(e.target.value)}
                            required
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="work_experience" className="block text-sm font-medium text-gray-700">
                            Work Experience
                        </label>
                        <input
                            type="textArea"
                            name="work_experience"
                            id="work_experience"
                            onChange={(e) => setwork_experience(e.target.value)}
                            required
                            className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                        <label className="block text-sm font-medium text-gray-700">Photo</label>
                        <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 p-2  border-dashed rounded-md ${file ? "border-indigo-600" : "border-gray-300"}`}>
                            <div className="space-y-1 text-center">
                                <div className="preview">
                                    {file
                                        ?
                                        <p className="mb-2">{file.name}</p>
                                        :
                                        <svg
                                            className="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    }

                                </div>
                                <div className="flex text-sm text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-600"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" accept="image/*" required className="sr-only"
                                            onChange={(e) => setfile(e.target.files[0])} />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>




                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                    >
                        Join Us
                    </button>
                </form>
                <div className="pt-6 mt-6 text-sm font-medium text-gray-700 border-t border-gray-200">
                    We will get in touch with you shortly.
                </div>
                {progress === 0 ? "" :
                    <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                            <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                        </div>
                        {progress === 100 &&
                            <div class="p-4 flex items-center border-l-4 shadow-md border-indigo-600 fade show toast" role="alert" aria-live="assertive" aria-atomic="true">
                                <div class="toast-body">Success, we have recieved your details.</div>
                                <button type="button" class="ml-auto mr-3 btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>}


                    </div>
                }
            </div>
            <div className="px-4 py-20 space-y-10 xl:py-32 md:px-40 lg:px-20 xl:px-40">

                {props.features.map((feature, index) => (
                    <div className="flex space-x-3" key={index}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-none w-6 h-6 mt-1 text-indigo-600">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                            <h2 className="text-xl font-medium text-indigo-600">{feature.name}</h2>
                            <p className="mt-1 text-gray-700">{feature.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>

    )
}


export default ExpertForm
