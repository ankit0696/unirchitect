import React, { useState } from 'react'
import { firestore } from '../../firebase/config.js'


const ReferForm = () => {

    const [refers, setRefers] = useState({
        referName: "",
        referPhone: "",
        referEmail: "",
        referAddress: "",
        clientName: "",
        clientPhone: "",
        clientProjectType: "Resedential",
        clientWorkLocation: "",
    })

    const clearState = () => {
        setRefers(() => {
            return {
                referName: "",
                referPhone: "",
                referEmail: "",
                referAddress: "",
                clientName: "",
                clientPhone: "",
                clientWorkLocation: "",
            }
        })
    }


    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setRefers((prev) => {
            return { ...prev, [name]: value }
        })

    }
    const uploadHandler = async (e) => {
        e.preventDefault()
        firestore.collection("refers").add({
            referName: refers.referName,
            referPhone: refers.referPhone,
            referEmail: refers.referEmail,
            referAddress: refers.referAddress,
            clientName: refers.clientName,
            clientPhone: refers.clientPhone,
            clientProjectType: refers.clientProjectType,
            clientWorkLocation: refers.clientWorkLocation,
        })
            .then(() => {
                clearState()
                alert('Form submitted')
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    }

    return (
        <section id='refer-form' className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5'>
            <form onSubmit={uploadHandler} >
                <div className="overflow-hidden sm:rounded-md">
                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3 md:px-3">
                            <h2 className='text-lg my-3'>Personal Details</h2>
                            <div className='py-3'>
                                <label htmlFor="referName" className="block text-sm font-medium text-gray-700">Name</label>
                                <input value={refers.referName} onChange={handleChange} required type="text" name="referName" id="referName" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                            <div className='py-3'>
                                <label htmlFor="referPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input value={refers.referPhone} onChange={handleChange} required type="text" name="referPhone" id="referPhone" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                            <div className='py-3'>
                                <label htmlFor="referEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input value={refers.referEmail} onChange={handleChange} required type="email" name="referEmail" id="referEmail" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                            <div className='py-3'>
                                <label htmlFor="referAddress" className="block text-sm font-medium text-gray-700">Address</label>
                                <input value={refers.referAddress} onChange={handleChange} required type="text" name="referAddress" id="referAddress" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-3 md:px-3">
                            <h2 className='text-lg my-3'>Client Details</h2>

                            <div className='py-3'>
                                <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">Name</label>
                                <input value={refers.clientName} onChange={handleChange} required type="text" name="clientName" id="clientName" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                            <div className='py-3'>
                                <label htmlFor="clientPhone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input value={refers.clientPhone} onChange={handleChange} required type="text" name="clientPhone" id="clientPhone" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                            <div className='py-3'>

                                <label htmlFor="clientProjectType" className="block text-sm font-medium text-gray-700">
                                    Project Type
                                </label>
                                <select
                                    value={refers.clientProjectType} onChange={handleChange}
                                    id="clientProjectType"
                                    name="clientProjectType"
                                    required
                                    className="mt-1 block w-full py-2 px-3 p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                                >
                                    <option>Resedential</option>
                                    <option>Commercial</option>
                                    <option>Apartment</option>
                                    <option>School / College</option>
                                    <option>Others</option>

                                </select>
                            </div>

                            <div className='py-3'>
                                <label htmlFor="clientWorkLocation" className="block text-sm font-medium text-gray-700">Work Location</label>
                                <input value={refers.clientWorkLocation} onChange={handleChange} required type="text" name="clientWorkLocation" id="clientWorkLocation" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />

                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-center py-5 md:py-10">
                    <button
                        type='submit'
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none"
                    >
                        Refer Now
                    </button>
                </div>

            </form >
        </section >
    )
}

export default ReferForm
