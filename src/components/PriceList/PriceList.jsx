import React, { useState, useEffect } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, sePrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => sePrices(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h2 className='text-5xl text-center mt-5 font-semibold'>Awesome Affordable Price</h2>
            <hr className='h-1 w-5/12 mx-auto mt-5 bg-red-300' />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10'>
                {
                    prices.map((price, index) => <PriceCard data={price} key={index}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;