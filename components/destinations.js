import React from 'react'

const Destinations = () => {
    return (
        <div className="  flex flex-col  md:p-8  text-lg font-medium z-50 text-gray-800   ">
            <div className="flex flex-col p-8  border-t border-b hover:border-gray-700 transition duration-200 ease-in cursor-pointer ">

                <div className="flex items-center  justify-between cursor-pointer  ">
                    <h3>New Destinations</h3>
                    <span className="transform rotate-90  ">{'>'}</span>
                </div>

            </div>

            <div className="flex flex-col p-8  border-t border-b hover:border-gray-700 transition duration-200 ease-in cursor-pointer ">

                <div className="flex items-center justify-between">
                    <h3>Destinations</h3>
                    <span className="transform rotate-90  ">{'>'}</span>
                </div>


            </div>


        </div>
    )
}

export default Destinations
