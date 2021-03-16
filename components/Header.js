import React from 'react'
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full  mb-20" >

            <div className="relative w-full bg-black z-0 flex flex-col items-center " style={{ height: "70vh" }}>
                <Image src="/Carousel2.jpg" layout="fill" className={`transform  hover:scale-105 ransition-transform duration-700 ease-in`} objectFit="cover" priority="true" />
                <div className="absolute top-0  transition-opacity duration-300 ease-linear  right-0 left-0 bottom-0 bg-gradient-to-br from-black to-transparent z-10 opacity-40    "></div>



                <div className=" relative top-2/3    w-5/6      z-20                   bg-white rounded  shadow-lg  md:p-5  flex flex-col   justify-evenly" >
                    <p className="text-gray-800">hh</p>
                </div>

            </div>




        </div>
    )
}

export default Header
