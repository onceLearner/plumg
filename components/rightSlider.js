import React, { useEffect, useState } from 'react'
import { IconClose } from './svg/mainIcons'
import styles from '../styles/Home.module.css'




import { IconFb, IconInsta, IconYtb, IconTwitter } from './svg/socialIcons'

const icons = [IconFb, IconInsta, IconYtb, IconTwitter]



const RightSlider = (props) => {

    const [Right, setRight] = useState('-left-2/3')
    const [opacity, setOpacity] = useState(0)



    const handleCloseSlider = () => { ; props.setShowRightSlider(false); props.setZvalue(0) }


    useEffect(() => {
        const To = setTimeout(() => { setRight('left-0'); setOpacity(40) }, 10)





        return () => clearTimeout(To)
    }, [])


    return (
        <div className="  z-50  " >

            <div onClick={() => { setRight('-left-1/2'); setOpacity(0); setTimeout(() => handleCloseSlider(), 600) }} className={`absolute  h-screen  top-0 right-0 bottom-0 left-0  transition-opacity duration-500 ease-linear  bg-black opacity-${opacity} z-40 cursor-pointer`} style={{ zIndex: "100 !important" }}></div>

            <div className={` absolute  h-screen  overflow   ${Right}  h-full   overflow-y-hidden   bg-purple-600 transition-all duration-700      opacity-100 z-50`} >
                <span className="text-white absolute right-4 top-4 text-2xl font-thin cursor-pointer " onClick={() => { setRight('-left-1/2'); setOpacity(0); setTimeout(() => handleCloseSlider(), 600) }} > <IconClose /> </span>

                <div className="flex flex-col  md:text-6xl text-2xl p-6 md:p-24    space-y-5 capitalize text-gray-50 ">
                    <h3>Journal</h3>
                    <h3>about</h3>
                    <h3>FAQ</h3>

                    <div className="text-lg md:text-2xl  py-10">
                        <p>become a host</p>
                        <p>contact us</p>


                    </div>

                    <div className="flex flex-wrap  space-x-6 py-1/3  ">

                        {
                            icons.map(Icn => (
                                <div className="p-3 text-black  bg-white shadow-lg rounded-full transition duration-200 ease-in  cursor-pointer  hover:border-black border border-white">
                                    <Icn />
                                </div>
                            ))
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default RightSlider
