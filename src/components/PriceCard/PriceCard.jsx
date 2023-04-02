import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({data}) => {
    const features = data.features;
    return (
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-red-400 shadow-md">
              <h3 className="mb-4 text-2xl font-semibold">{data.name}</h3>
              <p className="font-light text-gray-500 sm:text-lg ">{data.description}</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">${data.price}</span>
                  <span className="text-gray-500 ">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 text-left">
                  {
                    features.map((feature, index) => <Feature feature={feature} key={index}></Feature>)
                  }
              </ul>
              <a href="#" className="bg-red-400 mt-auto hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center relative bottom-0">Get started</a>
          </div>
    );
};

export default PriceCard;

