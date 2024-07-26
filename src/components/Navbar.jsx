import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-900 px-5 py-3 w-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-white text-3xl font-bold'>Shopping Cart</h1>
                <div>
                    <ul className='flex gap-5 text-white font-semibold'>
                        <li>
                            <Link to={'/'}>HOME</Link>
                        </li>
                        <li>
                            <Link to={'/cart'}>CART</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar