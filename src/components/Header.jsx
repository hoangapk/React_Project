import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MENU } from '../utils/Contains';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='flex justify-between p-5 bg-yellow-600'>
            <div className='flex items-center justify-center w-50 h-10'>
                <img src="../src/assets/images/logo.png" alt="logo shop" />
            </div>
            <div className='flex gap-3'>
                <button className='flex px-4 font-bold rounded-3xl py-3 gap-2 items-center justify-center text-white bg-gray-600'>
                    <IoReorderThreeOutline />
                    <p>Menu</p>
                </button>
                <input type="text" name="" id="" placeholder='Enter phone, laptop, or accessory name to search...' className='w-120 bg-white pl-2 rounded-3xl outline-0' />
            </div >

            <div className='flex justify-center items-center text-white gap-5'>
                {
                    MENU.map((item, index) => (
                        <Link key={index} to={item.path}>{item.name}</Link>
                    ))
                }
            </div>
            <button className='flex content-center items-center gap-2 text-white bg-gray-600 px-4 py-3 rounded-3xl'>
                <FaShoppingCart />
                <p className='font-bold'>Shopping Cart</p>
            </button>
        </div>
    );
}

export default Header;