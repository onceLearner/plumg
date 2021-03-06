import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { dataMainShow } from '../data/dataMainShow'


// data to populate the each section , yes it is repeating, but since  I think it is better this way
const [section1, section2, section3] = dataMainShow

const MiddleShow = () => {



    const [scrollDir, setScrollDir] = useState(0);

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
                ticking = false;
                return;
            }
            if (scrollY > 1000)
                setScrollDir(scrollY);
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);




    return (
        <div className=" flex flex-col    md:p-32  md:space-y-72  space-y-40  " style={{ zIndex: "-1" }}>

            <div className="flex flex-wrap  justify-evenly  space-y-11 ">
                <div className="   relative   md:w-96 w-2/3" style={{ height: "480px" }} >
                    <Image src={section1.imgUrl} className="z-20" layout="fill" objectFit="cover" />
                    <div className="w-full  h-full  transform md:-translate-x-9 -translate-y-9 bg-purple-600 z-10 " > </div>
                    <p className="md:text-sm text-xs break-words font-thin text-gray-700 py-2 ">{section1.imgTitle} </p>
                </div>
                <div style={{ transform: `translateY(${120 - scrollDir / 22}px)` }} className="flex flex-col  md:items-baseline items-center w-96 space-y-7 transition-all duration-500 ease-linear ">
                    <span className="text-7xl text-yellow-200">{section1.id}</span>
                    <h2 className="md:text-3xl text-xl   font-medium"> {section1.title}</h2>
                    <p className="text-gray-600">
                        {section1.subtitle}
                    </p>
                </div>

            </div>



            <div className="md:flex flex-wrap  hidden justify-evenly  ">
                <div style={{ transform: `translateY(${180 - scrollDir / 22}px)` }} className=" transition-all duration-500 ease-linear flex flex-col  md:items-baseline items-center w-96 space-y-7 transition-all duration-500 ease-linear">
                    <span className="text-7xl text-yellow-200">{section2.id}</span>
                    <h2 className="md:text-3xl text-xl   font-medium"> {section2.title}</h2>
                    <p className="text-gray-600">
                        {section2.subtitle}
                    </p>
                </div>
                <div className="   relative  mt-20 md:w-96 w-2/3" style={{ height: "480px" }} >
                    <Image src={section2.imgUrl} className="z-20" layout="fill" objectFit="cover" />
                    <div className="w-full h-full  transform translate-x-9 -translate-y-9 bg-pink-600 z-10 " > </div>
                    <p className="md:text-sm text-xs break-words font-thin text-gray-700 py-2 ">{section2.imgTitle} </p>
                </div>

            </div>

            <div className="md:hidden flex flex-wrap space-y-11   justify-evenly  ">
                <div className="   relative  md:w-96 w-2/3" style={{ height: "480px" }} >
                    <Image src={section2.imgUrl} className="z-20" layout="fill" objectFit="cover" />
                    <div className="w-full h-full  transform translate-x-9 -translate-y-9 bg-pink-600 z-10 " > </div>
                    <p className="md:text-sm text-xs break-words font-thin text-gray-700 py-2 ">{section2.imgTitle} </p>
                </div>
                <div style={{ transform: `translateY(${150 - scrollDir / 22}px)` }} className="flex flex-col  md:items-baseline items-center w-80 space-y-7 transition-all duration-500 ease-linear">
                    <span className="text-7xl text-yellow-200">{section2.id}</span>
                    <h2 className="md:text-3xl text-xl   font-medium"> {section2.title}</h2>
                    <p className="text-gray-600">
                        {section2.subtitle}
                    </p>
                </div>


            </div>




            <div className="flex flex-wrap  justify-evenly space-y-11  ">
                <div className="   relative    md:w-96 w-2/3" style={{ height: "480px" }} >
                    <Image src={section2.imgUrl} className="z-20" layout="fill" objectFit="cover" />
                    <div className="w-full h-full  transform -translate-x-9 -translate-y-9 bg-indigo-600 z-10 " > </div>
                    <p className="md:text-sm text-xs break-words font-thin text-gray-700 py-2 ">{section2.imgTitle} </p>
                </div>
                <div style={{ transform: `translateY(${190 - scrollDir / 28}px)` }} className="flex flex-col  md:items-baseline items-center w-96 space-y-7 transition-all duration-500 ease-linear">
                    <span className="text-7xl text-yellow-200">{section3.id}</span>
                    <h2 className="md:text-3xl text-xl   font-medium"> {section2.title}</h2>
                    <p className="text-gray-600">
                        {section2.subtitle}
                    </p>
                </div>

            </div>


        </div>
    )
}

export default MiddleShow
