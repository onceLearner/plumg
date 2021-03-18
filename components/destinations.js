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
                <div className={`flex flex-col space-y-4  w-full ${showNewDest ? 'h-72' : 'h-0 overflow-hidden '} transition-all duration-300 ease-linear    `} style={{ zIndex: "140" }}>
                    <h3 className="text-gray-600 pt-2 ">the As</h3>
                    <div className="grid grid-cols-3 text-gray-400 text-sm  p-2 py-4  ">
                        <p>A</p>
                        <p>A</p>
                        <p>A</p>
                        <p>A</p>
                        <p>A</p>
                        <p>A</p>
                        <p>A</p>

                    </div>
                    <h3 className="text-gray-600  pt-2 ">the Bs</h3>
                    <div className="grid grid-cols-3 text-gray-400 text-sm p-2 py-4  ">
                        <p>b</p>
                        <p>b</p>
                        <p>b</p>
                        <p>b</p>
                        <p>b</p>
                        <p>b</p>
                        <p>b</p>

                    </div>


                </div>

            </div>

            <div onClick={() => setShowDest(!showDest)} className="flex flex-col p-8  border-t border-b hover:border-gray-700 transition duration-200 ease-in cursor-pointer ">

                <div className="flex items-center justify-between">
                    <h3>Destinations</h3>
                    <span className="transform rotate-90  ">{'>'}</span>

                </div>
                <div className={`flex flex-col  w-full  ${showDest ? 'h-72' : 'h-0 overflow-hidden '} transition-all duration-300 ease-linear    `} style={{ zIndex: "140" }}>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                    <p>A</p>
                </div>


            </div>


        </div >
    )
}

export default Destinations
