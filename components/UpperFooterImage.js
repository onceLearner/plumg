import React, { useState, useEffect, useCallback, useRef } from 'react'
import Image from "next/image"



const UpperFooterImage = () => {
    const [isScrolling, setIsScrolling] = useState(false)
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
            if (scrollY > 4000)
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
        <div className="w-full h-screen my-10 transform transition-all duration-300 ease-linear  " style={{ backgroundImage: "url(/upperfooter.jpg)", backgroundSize: ` ${100 + scrollDir / 100}%`, transform: "scale(1,1)", backgroundPosition: "center center", objectFit: "cover" }}  >
            {/* <Image src="/upperfooter.jpg" layout="fill" className={` transition - transform duration - 700 ease -in `} objectFit="cover" priority="true" quality={30} /> */}
            {/* <img src="/upperfooter.jpg" className={` transition - transform duration - 200 ease -in `} style={{ transform: `scale(${ 1 + scrollDir / 6500 }, ${ 1 + scrollDir / 6500 })` }} /> */}
            <div style={{ transform: `translateY(${250 - scrollDir / 30}px)` }} className={`absolute  top-1/4  md:right-10  p-8   transition-all duration-500 ease-linear   md:w-3/6  w-full   h-2/5    bg-white rounded-xl  shadow-lg  md:p-16  flex flex-col   justify-evenly`} >

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
