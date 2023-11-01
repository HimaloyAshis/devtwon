import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=''>
            <div className='bg-[#164863] py-2 px-2'>
                <p className='text-white'>DevTown</p>
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