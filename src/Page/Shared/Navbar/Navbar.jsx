import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [Open, setOpen] = useState(false)

    return (
        <div className=''>
            <div className='bg-[#164863] py-2 px-2'>
                <span className=''>
                    <XMarkIcon className="h-6 w-6 text-blue-500" />
                    <Bars3Icon className="h-6 w-6 text-blue-500" />
                </span>
            </div>
            <ul>

                <li><Link>DevTown</Link></li>
                <li><Link>DevTown</Link></li>
                <li><Link>DevTown</Link></li>
                <li><Link>DevTown</Link></li>
                <li><Link>DevTown</Link></li>
                <li><Link>DevTown</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;