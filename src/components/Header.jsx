import React from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MENU } from '../utils/Contains';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='flex justify-between p-5 bg-red-600'>
            <div className='flex items-center justify-center'>
                <img src="https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/small/logo_main_2f0c6d0344.png" alt="" className='w-40 h-8' />
            </div>
            <div className='flex gap-3'>
                <button className='flex px-4 font-bold rounded-3xl py-3 gap-2 items-center justify-center text-white bg-gray-600'>
                    <IoReorderThreeOutline />
                    <p>Danh mục</p>
                </button>
                <input type="text" name="" id="" placeholder='Nhập tên điện thoại, laptop, phụ kiện... cần tìm' className='w-120 bg-white pl-2 rounded-3xl' />
            </div >

            <div className='flex justify-center items-center text-white gap-5'>
                {
                    MENU.map((item, index) => (
                        <Link to={item.path}>{item.name}</Link>
                    ))
                }
            </div>
            <button className='flex content-center items-center gap-2 text-white bg-gray-600 px-4 py-3 rounded-3xl'>
                <FaShoppingCart />
                <p className='font-bold'>Giỏ hàng</p>
            </button>
        </div>
    );
}

export default Header;