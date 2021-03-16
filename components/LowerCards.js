import React from 'react'
import { DataLowerCard } from '../data/DataLowerCards'
import Card from './Card'

const LowerCards = () => {
    return (
        <div className="mt-10  px-10 py-20   flex flex-col space-y-8 border-t border-gray-100">
            <h2 className="text-2xl  text-gray-700    px-6 font-semibold">Book your dream  stay today</h2>
            <div className=" flex  flex-wrap   ">
                {
                    DataLowerCard.map(crdData => (
                        <div className="border-r p-6 ">
                            <Card data={crdData} />
                        </div>
                    ))
                }



            </div>
        </div>
    )
}

export default LowerCards
