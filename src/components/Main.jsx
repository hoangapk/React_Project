import React from 'react';
import { PRODUCTS, AIRCONDITIONER } from '../utils/Contains';
import { IoIosWater } from 'react-icons/io';
import { RiGeminiFill } from 'react-icons/ri';
import { FaCamera } from 'react-icons/fa';
import { TbPhotoSensor3 } from 'react-icons/tb';
import { MdSensors } from 'react-icons/md';


function Main(props) {
    return (
        <div>
            <h2 className='font-bold text-3xl px-6 mt-20'>Choose the right upgrade</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch p-6 rounded-2xl">
                {
                    PRODUCTS.map((item, index) => (
                        <div class="group flex flex-col justify-between p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg ">
                            <div className='flex mb-10'>
                                <div className="div">
                                    <img src={item.img} alt="" className='transition-all duration-300 group-hover:scale-110' />
                                </div>
                                <div className='flex items-center justify-center flex-col gap-2'>
                                    <div className='flex flex-col items-center text-center'>
                                        <IoIosWater />
                                        <p className='text-xs'>Kháng bụi & nước IP54</p>
                                    </div>
                                    <div className='flex flex-col items-center text-center'>
                                        <RiGeminiFill />
                                        <p className='text-xs'>OneUI 7</p>
                                    </div>
                                    <div className='flex flex-col items-center text-center'>
                                        <FaCamera />
                                        <p className='text-xs'>Camera 50MP</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='text-xs text-gray-800 py-0.5 px-1.5 bg-gray-300 rounded-2xl'>buy installment 0%</span>
                                <div className='flex gap-2 mt-2 h-5'>
                                    <p className='line-through text-gray-500 text-sm'>{item.origin}$</p>
                                    <p className='text-red-500 text-sm font-bold'>-11%</p>
                                </div>
                                <p className='font-bold'>{item.price}$</p>
                                <p className='text-sm text-green-600 mb-3 h-5'>Discount {item.discount}$</p>
                                <p className='line-clamp-2 h-10 leading-tight'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className='font-bold text-3xl px-6 mt-5'>Air conditioner</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch p-6 rounded-2xl">
                {
                    AIRCONDITIONER.map((item, index) => (
                        <div class="group flex flex-col justify-between p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg ">
                            <div className='flex mb-10'>
                                <div className="div">
                                    <img src={item.img} alt="" className='w-50  transition-all duration-300 group-hover:scale-110'/>
                                </div>
                                <div className='flex items-center justify-center flex-col gap-2'>
                                    <div className='flex flex-col items-center text-center'>
                                        <TbPhotoSensor3 />
                                        <p className='text-xs'>Máy lạnh Turbo</p>
                                    </div>
                                    <div className='flex flex-col items-center text-center'>
                                        <MdSensors />
                                        <p className='text-xs'>Cảm biến nhiệt</p>
                                    </div>
                                    <div className='flex flex-col items-center text-center'>
                                        <RiGeminiFill />
                                        <p className='text-xs'>Tự động</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className='text-xs text-gray-800 py-0.5 px-1.5 bg-gray-300 rounded-2xl'>buy installment 0%</span>
                                <div className='flex gap-2 mt-2 h-5'>
                                    <p className='line-through text-gray-500 text-sm'>{item.origin}$</p>
                                    <p className='text-red-500 text-sm font-bold'>-11%</p>
                                </div>
                                <p className='font-bold'>{item.price}$</p>
                                <p className='text-sm text-green-600 mb-3 h-5'>Discount {item.discount}$</p>
                                <p className='line-clamp-2 h-10 leading-tight'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Main;