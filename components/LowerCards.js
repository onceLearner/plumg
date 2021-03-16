import React from 'react'
import { DataLowerCard } from '../data/DataLowerCards'
import Card from './Card'

const LowerCards = () => {
    return (
        <div className="mt-10  p-3 md:8  flex flex-col space-y-8">
            <h2 className="text-xl   md:ml-24 ml-6 font-medium">Book your dream </h2>
            <div className=" flex  flex-wrap   justify-evenly">
                {
                    DataLowerCard.map(crdData => (
                        <Card data={crdData} />
                    ))
                }



            </div>
        </div>
    )
}

export default LowerCards
