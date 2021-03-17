
import React from 'react'
import { dataFooter } from '../data/dataFooter'
import LangCurrency from './LangCurrency'
import { IconFb, IconInsta, IconYtb, IconTwitter } from './svg/socialIcons'

const icons = [IconFb, IconInsta, IconYtb, IconTwitter]

const Footer = () => {
    return (
        <div className="w-full h-full flex flex-col bg-gray-50   pt-10      ">
            <div className=" md:hidden block  mb-10 ">
                <LangCurrency />

            </div>


            <div className="flex flex-1 flex-wrap       space-x-4  items-center  md:p-20  " >

                {
                    dataFooter.map(elt => (
                        <div className="flex flex-col   space-y-3 md:w-72  h-40  p-2 ">
                            <h5 className="text-gray-800 text-xl font-semibold  capitalize">{elt.title}</h5>
                            <div className=" flex flex-col    text-gray-600">
                                {elt.subtitles.map(subt => (
                                    <span className="hover:underline cursor-pointer">{subt}</span>
                                ))}
                            </div>


                        </div>
                    ))
                }
                <div className="socials flex flex-col  space-y-4 md:mt-4  py-4  ">
                    <h5 className="text-gray-800 text-xl font-semibold  capitalize"> socials</h5>

                    <div className="flex flex-wrap  space-x-5 items-center  justify-evenly  ">

                        {
                            icons.map(Icn => (
                                <div className="p-3 bg-white shadow-lg rounded-full transition duration-200 ease-in  cursor-pointer  hover:border-black border border-white">
                                    <Icn />
                                </div>
                            ))
                        }

                    </div>

                </div>



            </div>

            <div className="flex flex-col  text-xs md:text-xs text-gray-500 bg-gray-100 w-full p-8  ">
                <p> © Copyright Plum Guide 2021</p>

                <div className="divide-x-2 space-x-2 mt-3   ">
                    <span>
                        Terms
                </span>
                    <span>
                        Privacy
                </span>
                    <span>
                        Sitemap
                </span>
                </div>

            </div>


        </div>
    )
}

export default Footer
