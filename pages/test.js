import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../components/Card';
import { DataLowerCard } from '../data/DataLowerCards';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <Card data={DataLowerCard[0]} />,
    <Card data={DataLowerCard[1]} />,
    <Card data={DataLowerCard[2]} />,
    <Card data={DataLowerCard[3]} />,

];

const Carousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
    />
);

export default Carousel