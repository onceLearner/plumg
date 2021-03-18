import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { IconDate, IconMap, IconMinus, IconPlus } from './svg/mainIcons'
import Navigation from './navigation'
import RightSlider from './rightSlider'


// we have thre lyers: image  -> black opacity 50 div  -> div containing all the info


const Header = (props) => {



    const [counter, setCounter] = useState(0)



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
            if (scrollY < 1000)
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
        <div className="relative w-full bg-black z-0 flex flex-col items-center  mb-20 transform transition-all duration-300 ease-linear  " style={{ height: "670px", backgroundImage: "url(/Carousel2.jpg)", backgroundSize: ` ${100 + scrollDir / 50}%`, backgroundPosition: "center center", objectFit: "cover" }}>


            {/* <Image src="/Carousel2.jpg" layout="fill" className={`transform  hover:scale-105 ransition-transform duration-700 ease-in`} objectFit="cover" priority="true" /> */}
            {/* <div className="w-full h-screen my-10 transform transition-all duration-300 ease-linear  " style={{ backgroundImage: "url(/upperfooter.jpg)", backgroundSize: ` ${100 + scrollDir / 100}%`, backgroundPosition: "center center", objectFit: "cover" }}  > */}


            <div className="absolute top-0  transition-opacity duration-300 ease-linear  right-0 left-0 bottom-0 bg-gradient-to-br from-black to-transparent z-10 opacity-60    "></div>

            <div className=" absolute z-30 flex flex-col items-center md:justify-start justify-between  space-y-32 w-full h-full">

                <Navigation setZvalue={props.setZvalue} />

                <div style={{ transform: `translateY(${40 - scrollDir / 15}px)` }} className="flex flex-col items-center space-y-20 transition-transform duration-300 ease-linear">
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

        </div>





    )
}

export default Header
