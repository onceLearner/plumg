import React, { useState, useEffect } from 'react'
import Image from "next/image"



const UpperFooterImage = () => {
    const [isScrolling, setIsScrolling] = useState(false)


    return (
        <div className="w-full h-screen my-10" onMouseOver={() => setIsScrolling(true)} onMouseLeave={() => setIsScrolling(false)} >
            <Image src="/upperfooter.jpg" layout="fill" className={`transform ${isScrolling && 'scale-105'} transition-transform duration-700 ease-in`} objectFit="cover" priority="true" quality={30} />
            <div className="absolute top-1/4  md:right-10  p-8     md:w-3/6  w-full   h-2/5    bg-white rounded-xl  shadow-lg  md:p-16  flex flex-col   justify-evenly" >

                <h2 className="text-3xl  font-semibold capitalize  ">
                    Introducing Our 2020 Home of the Year
                </h2>

                <p className="text-gray-800 font-thin">
                    Find out which of our ten shortlisted homes has been crowned Plum Guide's 2020 Home of the Year.
               </p>

                <button className="p-4 text-sm border border-gray-900  w-32 text-gray-900 hover:border-purple-900">Read More</button>
            </div>


        </div>
    )
}

export default UpperFooterImage
