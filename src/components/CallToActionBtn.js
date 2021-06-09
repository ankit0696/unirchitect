import React from 'react'

export const CallToActionBtn = () => {
    return (
        <>
            <div className="rounded-md shadow">
                <button
                    href="#"
                    onClick={() => { window.Calendly.initPopupWidget({ url: 'https://calendly.com/unirchitect/30min?primary_color=4f46e5' }); return false; }}
                    className="w-full cursor-pointer flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                    Schedule appointment
</button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                    href="#consultancies"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                    Learn More
</a>
            </div>
        </>
    )
}

export default CallToActionBtn
