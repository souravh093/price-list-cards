import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <li className="flex items-center space-x-3">
            <CheckCircleIcon className='w-5 h-5 text-green-500'></CheckCircleIcon>
            <span>{feature}</span>
        </li>
    );
};

export default Feature;