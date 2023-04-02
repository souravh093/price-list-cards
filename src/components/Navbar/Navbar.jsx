import {React, useState} from 'react';
import Link from '../LInk/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const routes = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About",
          path: "/about"
        },
        {
          id: 3,
          name: "Contact",
          path: "/contact"
        },
        {
          id: 4,
          name: "Blog",
          path: "/blog"
        },
        {
          id: 5,
          name: "Services",
          path: "/services"
        }
      ]
    return (
        <div>
            <nav className='bg-red-400'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span>
                    {
                     open === true ? 
                        <XMarkIcon className='h-6 w-6 text-red-500' /> :
                        <Bars3Icon className="h-6 w-6 text-red-500" />
                    }</span>
                    
                    
                </div>

                <ul className={`md:flex bg-red-400 p-4 gap-5 absolute md:static duration-500 ${open ? 'top-6' : '-top-96'}`}>
                    {
                        routes.map(route => <Link data={route} key={route.id}></Link>)
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;