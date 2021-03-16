import React from 'react'
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full h-screen" >

            <div className="relative w-full bg-black z-0 " style={{ height: "70vh" }}>
                <Image src="/Carousel2.jpg" layout="fill" className={`transform  hover:scale-105 ransition-transform duration-700 ease-in`} objectFit="cover" priority="true" />
                <div className="absolute top-0  transition-opacity duration-300 ease-linear  right-0 left-0 bottom-0 bg-gradient-to-br from-black to-transparent z-10 opacity-40    "></div>}
            </div>

            <div className=" relative top-3/4   z-20 hidden   p-8       w-full   h-32      bg-white rounded-xl  shadow-lg  md:p-16  flex flex-col   justify-evenly" >

            </div>


        </div>
    )
}

export default Header
