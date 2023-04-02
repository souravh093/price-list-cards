import React from 'react';

const Link = ({data}) => {
    return (
        <li className='hover:text-white transition-all'>
            <a href={data.path}>{data.name}</a>
        </li>
    );
};

export default Link;