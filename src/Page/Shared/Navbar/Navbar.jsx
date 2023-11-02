import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const [Open, setOpen] = useState(false)

    return (
        <div className='bg-[#164863] py-2 px-2 '>
            <div className=''>
                <span onClick={() => setOpen(!Open)} className='md:hidden'>

                    {
                        Open === true ? < XMarkIcon className="h-6 w-6 text-blue-500 cursor-wait" />
                            : <Bars3Icon className="h-6 w-6 text-blue-500 cursor-pointer" />
                    }
                </span>
            </div>
            <ul className={` md:flex bg-[#164863] py-3 px-2 rounded-md mt-3 duration-500 text-white font-bold absolute md:static gap-2  ${Open? 'top-6' :  "-top-56"} `}>

                <li className='mb-2'><Link>DevTown</Link></li>
                <li className='mb-2'><Link>DevTown</Link></li>
                <li className='mb-2'><Link>DevTown</Link></li>
                <li className='mb-2'><Link>DevTown</Link></li>
                <li className='mb-2'><Link>DevTown</Link></li>
                <li className='mb-2'><Link>DevTown</Link></li>
            </ul>

        </div>
    );
};

export default Navbar;