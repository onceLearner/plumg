import React, { useState } from 'react'

const Destinations = () => {

    const [showNewDest, setShowNewDest] = useState(false)
    const [showDest, setShowDest] = useState(false)

    return (
        <div className="  flex flex-col  md:p-8  text-lg font-medium z-50 text-gray-800   ">
            <div onClick={() => setShowNewDest(!showNewDest)} className="flex flex-col p-8  border-t border-b hover:border-gray-700 transition duration-200 ease-in cursor-pointer ">

                <div className="flex items-center  justify-between cursor-pointer  ">
                    <h3>New Destinations</h3>
                    <span className="transform rotate-90  ">{'>'}</span>
                </div>
                <div className={showNewDest ? `flex flex-col  duration-600 transition-transform  ` : `hidden transition duration-600 `}>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                </div>

            </div>

            <div onClick={() => setShowDest(!showDest)} className="flex flex-col p-8  border-t border-b hover:border-gray-700 transition duration-200 ease-in cursor-pointer ">

                <div className="flex items-center justify-between">
                    <h3>Destinations</h3>
                    <span className="transform rotate-90  ">{'>'}</span>

                </div>
                <div className={showDest ? `flex flex-col  duration-600 transition-transform  ` : `hidden transition duration-600 `}>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                </div>


            </div>


        </div>
    )
}

export default Destinations
