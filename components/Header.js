import React, { useState } from 'react'
import Image from "next/image"
import { IconDate, IconMap, IconMinus, IconPlus } from './svg/mainIcons'
import Navigation from './navigation'
import RightSlider from './rightSlider'


// we have thre lyers: image  -> black opacity 50 div  -> div containing all the info


const Header = () => {
    const [counter, setCounter] = useState(0)


    return (
        <div className="relative w-full bg-black z-0 flex flex-col items-center  mb-20" style={{ height: "670px" }}>


            <Image src="/Carousel2.jpg" layout="fill" className={`transform  hover:scale-105 ransition-transform duration-700 ease-in`} objectFit="cover" priority="true" />

            <div className="absolute top-0  transition-opacity duration-300 ease-linear  right-0 left-0 bottom-0 bg-gradient-to-br from-black to-transparent z-10 opacity-60    "></div>

            <div className=" absolute z-30 flex flex-col items-center md:justify-start justify-between  space-y-32 w-full h-full">

                <Navigation />


                <div className=" hidden md:flex  text-center w-1/2  flex-col      ">
                    <h1 className="text-4xl  font-bold uppercase text-white   ">book a stay in one of the world's best homes </h1>
                    <p className="uppercase text-lg text-white"> award-winning homes from madnan </p>

                </div>

                <div className="     md:w-auto w-full md:py-0 py-10    font-medium    z-30   flex-wrap      justify-center  items-center           bg-white md:rounded-md rounded-t-3xl   md:shadow-lg    flex   " >


                    <div className="flex items-center space-x-6  bottom-0  md:w-auto w-full     py-4  px-7 cursor-pointer border-b-8 border-white  focus-within:border-yellow-400">
                        <IconMap />
                        <input type="text" className="text-lg text-gray-600   p-2  focus:outline-none" placeholder="find your destination" />

                    </div>
                    <div className="flex space-x-6 md:w-auto w-full    items-center border-l  border-r md:h-5/6 p-7 px-10 hover:bg-gray-50 cursor-pointer" >
                        <IconDate />
                        <span className="text-lg text-gray-600  border-r pr-6">Check in </span>
                        <span className="text-lg text-gray-600 pl-6">Check out </span>



                    </div>


                    <div className="flex  items-center space-x-6  md:w-auto  justify-center    w-full md:h-5/6     p-4 px-10 cursor-pointer  border-r">
                        <div onClick={() => counter > 0 ? setCounter(counter - 1) : setCounter(counter)} className="    border rounded-full  font-bold border-yellow-400 p-1 hover:bg-yellow-400  cursor-pointer grid place-items-center"> <IconMinus /> </div>
                        <div className="text-lg text-gray-600  px-2"> {counter ? counter : ``} Guests </div>
                        <div onClick={() => setCounter(counter + 1)} className="    border rounded-full  font-bold border-yellow-400 p-1 hover:bg-yellow-400  cursor-pointer grid place-items-center"> <IconPlus /> </div>

                    </div>

                    <div className="flex items-center md:w-auto w-full md:pr-8 px-6  md:h-5/6">
                        <button className="md:w-48 w-full  py-5   px text-center text-sm  uppercase bg-yellow-400 hover:bg-yellow-200">Search </button>

                    </div>


                </div>
            </div>

        </div>





    )
}

export default Header
