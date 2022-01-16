import React from 'react';
import CarouselHome from '../components/CarouselHome';
import Categories from '../components/Categories';
import CarouselTwo from '../components/CarouselTwo';

const Home = () => {
    
    return (
        <div className="first-container-home">

            <CarouselHome />

            <Categories />

            <CarouselTwo />

        </div>
    )
}

export default Home
