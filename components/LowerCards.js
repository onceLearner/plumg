
import React, { useState } from 'react'
import { DataLowerCard } from '../data/DataLowerCards'
import Card from './Card'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider from "react-slick";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const itemsArr = []
DataLowerCard.forEach(data => itemsArr.push(
    <div className="border-r p-2 flex items-center justify-center  ">
        <Card data={data} />
    </div>
))


const LowerCards = () => {

    const [toRight, setToRight] = useState(0)
    const [toLeft, setToLeft] = useState(0)

    return (

        <div className="mt-10  px-10 py-20 space-y-8 border-t border-gray-100">
            <h2 className="text-2xl  text-gray-700    px-6 font-semibold">Book your dream  stay today</h2>
            <AliceCarousel

                animationType="fadeout"
                paddingLeft={2}
                paddingRight={2}
                mouseTracking
                items={itemsArr}
                responsive={responsive}
            />
        </div>




    )
}

export default LowerCards




{/* <div className={` relative flex   flex-wrap  justify-evenly space-x-6 flex-nowrap   `}> */ }


// {
//     DataLowerCard.map(crdData => (
//         <div className="border-r p-6 ">
//             <Card data={crdData} />
//         </div>
//     ))
// }