import React, { useContext } from 'react';
import { IoIosWater } from 'react-icons/io';
import { RiGeminiFill } from 'react-icons/ri';
import { FaAppStoreIos, FaCamera } from 'react-icons/fa';
import { TbPhotoSensor3 } from 'react-icons/tb';
import { MdSensors } from 'react-icons/md';
import { ProductContext } from '../contexts/ProductProvider';
import { AIRCONDITIONER } from '../utils/Contains';


function Main(props) {
    const { products } = useContext(ProductContext);

    return (
        <div>
            <h2 className='font-bold text-3xl px-6 mt-20'>Choose the right upgrade</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch p-6 rounded-2xl">
                {
                    products && products.map((item, index) => (
                        <div key={`products-${item.id || index}`} className="group flex flex-col justify-between p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg ">
                            {/* Nội dung thẻ bên trong giữ nguyên */}
                            <div className='flex mb-10'>
                                <div className="div">
                                    <img src={item.imgUrl} alt="" className='transition-all duration-300 group-hover:scale-110' />
                                </div>
                                <div className='flex items-center justify-center flex-col gap-2'>
                                    <div className='flex flex-col items-center text-center'>
                                        <IoIosWater />
                                        <p className='text-xs'>Kháng bụi & nước IP54</p>
                                    </div>
                                    <div className='flex flex-col items-center text-center'>
                                        <FaAppStoreIos />
                                        <p className='text-xs'>IOS 17</p>
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
                                <p className='text-sm text-green-600 mb-3 h-5'>Discount 19.99$</p>
                                <p className='line-clamp-2 h-10 leading-tight'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h2 className='font-bold text-3xl px-6 mt-5'>Air conditioner</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-stretch p-6 rounded-2xl">
                {
                    AIRCONDITIONER.map((item, index) => (
                        <div key={`air-${item.id || index}`} className="group flex flex-col justify-between p-4 bg-white rounded-xl transition-all duration-300 hover:shadow-lg ">
                            {/* Nội dung thẻ bên trong giữ nguyên */}
                            <div className='flex mb-10'>
                                <div className="div">
                                    <img src={item.img} alt="" className='w-50  transition-all duration-300 group-hover:scale-110' />
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