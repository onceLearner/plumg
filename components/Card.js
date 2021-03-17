import React, { useState } from 'react'
import Image from "next/image"

const Card = ({ data }) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <div className="flex flex-col  space-y-4      " style={{ height: "500px" }}>
            <div className={` relative w-60 transition-all duration-500 ease-in  bg-gray-400  cursor-pointer `} >

                <div className="absolute top-0    transition-opacity duration-300 ease-linear  right-0 left-0 bottom-0 bg-gray-900 z-10 opacity-0  hover:opacity-30   "></div>
                <div className="relative w-full  h-80 transform transition-transform duration-500 ease-in hover:scale-110 ">
                    <Image src={data.imgUrl} layout="fill" objectFit="cover" className=" " quality={20} />
                </div>
            </div>

            <span className="text-gray-500 font-light "> {data.place} </span>

            <h3 className="text-lg text-gray-800 font-light">{data.title}</h3>

            <div className="flex  space-x-3  py-4  w-full items-center ">
                <div className=" flex flex-col  transform -translate-y-4  leading-5  ">
                    <span className="text-gray-600 font-thin text-sm  ">from</span>
                    <span className="text-gray-600 font-thin  uppercase  ">mad</span>
                </div>
                <span className="text-gray-700  text-3xl     ">{data.price}</span>
                <span className="text-gray-400 font-thin    uppercase    ">per night</span>

            </div>


        </div>
    )
}

export default Card
