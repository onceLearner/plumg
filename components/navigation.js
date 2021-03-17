import React, { useState } from 'react'
import Image from "next/image"
import { IconMenu, IconUser } from './svg/mainIcons'
import RightSlider from './rightSlider'

const classHover = "bg-white opacity-60 cursor-pointer hover:opacity-90 transition-opacity duration-400 "

const Navigation = (props) => {






    return (
        <div className="w-full ">



            <div className={`flex  justify-between w-full  p-3  `}>


                <div className={`p-2 rounded-full  flex items-center   ${classHover} `}>
                    <IconMenu />
                </div>

                <div className="text-white md:hidden  ">
                    <Image src="/inspired-stay-white.png" width="250" height="40" quality={100} />
                </div>

                <div className=" hidden md:flex justify-between  items-center  space-x-6 font-semibold capitalize  ">
                    <div className="text-white md:block hidden  mr-4   ">
                        <Image src="/inspired-stay-white.png" className="" width="200" height="35" quality={100} />
                    </div>

                    <span className={`px-4 h-10 flex justify-center items-center text-center p-3 text-sm  rounded-3xl ${classHover} `}>
                        become a host
                </span>

                    <span className={` px-4 h-10 flex items-center justify-center text-center p-4  text-sm  rounded-3xl ${classHover} `}>
                        Need help?

                </span>

                    <span className={` px-4  h-10 flex items-center justify-center  text-center p-3 text-sm  rounded-3xl ${classHover} `}>
                        EN | MAD

                </span>

                    <span className={` px-4  h-10  flex  items-center justify-center  text-center p-3 text-sm  rounded-3xl ${classHover} `}>
                        Login

                </span>



                </div>

                <div className={`p-2 rounded-full  md:hidden block  ${classHover} `}>
                    <IconUser />
                </div>


            </div>
        </div>
    )
}

export default Navigation
