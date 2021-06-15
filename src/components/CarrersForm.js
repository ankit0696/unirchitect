import React, { useState } from 'react'
import { storage } from '../firebase.js'

const CarrersForm = () => {
    const [file, setfile] = useState(null)
    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [email, setemail] = useState()
    const [country, setcountry] = useState('India')
    const [phone, setphone] = useState()
    const [progress, setProgress] = useState(0)

    const uploadHandler = async (e) => {
        e.preventDefault()

        // let formData = new FormData(e.target)

        //send formdata
        const uploadTask = storage.ref(`files/${firstName}${lastName}${email}${phone}.pdf`).put(file)
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
                    .ref("files")
                    .child(`${firstName}${phone}.pdf`)
                    .getDownloadURL()
                    .then(url => {
                        // console.log(url)
                    });
            }
        )

        //reset formdata
        setfirstName('')
        setlastName('')
        setemail('')
        setphone('')

    }
    return (

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

            <div className="mt-10 sm:mt-0">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-1 text-sm text-gray-600">Use your primary email address.</p>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form onSubmit={uploadHandler} id="formUser">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                                                First name
                        </label>
                                            <input
                                                type="text"
                                                name="first_name"
                                                id="first_name"
                                                required
                                                onChange={(e) => setfirstName(e.target.value)}
                                                autoComplete="given-name"
                                                className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm  p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                                                Last name
                        </label>
                                            <input
                                                type="text"
                                                name="last_name"
                                                id="last_name"
                                                required
                                                onChange={(e) => setlastName(e.target.value)}
                                                autoComplete="family-name"
                                                className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">
                                                Email address
                        </label>
                                            <input
                                                type="text"
                                                name="email_address"
                                                id="email_address"
                                                required
                                                onChange={(e) => setemail(e.target.value)}
                                                autoComplete="email"
                                                className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country / Region
                        </label>
                                            <select
                                                id="country"
                                                name="country"
                                                value={country}
                                                onChange={(e) => setcountry(e.target.value)}
                                                required
                                                autoComplete="country"
                                                className="mt-1 block w-full py-2 px-3 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                            >
                                                <option>India</option>

                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Others</option>

                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                                Phone <small>(include country code)</small>
                                            </label>
                                            <input
                                                type="tel"
                                                minlength="9" maxlength="14"
                                                name="phone_number"
                                                id="phone_number"
                                                required
                                                onChange={(e) => setphone(e.target.value)}
                                                className="mt-1 focus:ring-indigo-600 focus:border-indigo-600 block w-full shadow-sm sm:text-sm p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="col-span-6 sm:col-span-4">
                                            <label className="block text-sm font-medium text-gray-700">Portfolio</label>
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
                                                            <input id="file-upload" name="file-upload" type="file" accept="application/pdf" required className="sr-only"
                                                                onChange={(e) => setfile(e.target.files[0])} />
                                                        </label>
                                                        <p className="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    >
                                        Join Us
                    </button>
                                </div>
                            </div>
                        </form>
                        {progress === 0 ? "" :
                            <div className="relative pt-1">
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                                    <div style={{ width: `${progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"></div>
                                </div>
                                {progress === 100 && <p>Success</p>}


                            </div>
                        }
                    </div>
                </div>
            </div>



        </div >
    )
}

export default CarrersForm
