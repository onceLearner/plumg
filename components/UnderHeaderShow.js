import React from 'react'
import { DataLowerCard } from '../data/DataLowerCards'
import Card from './Card'

const UnderHeaderShow = (props) => {
    return (
        <div className=" md:p-8 p-4   flex  flex-wrap     border-purple-600   overflow-hidden      " style={{ zIndex: props.zvalue }}  >
            <div className=" md:w-3/12 w-full   p-4 flex  flex-col     space-y-4  ">
                <h2 class="  text-3xl font-medium ">We don't list a lot of homes. Just the right ones.</h2>
                <p class=" text-gray-500 text-lg font-thin hidden md:block ">Just 3% of homes in each destination win the Plum Award, the new global quality standard for vacation homes.</p>
            </div>
            <div className=" w-6/12 flex    mx-2     transform   ">
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

export default UnderHeaderShow
