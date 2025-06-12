import React from 'react';
import { FaBookmark } from 'react-icons/fa';

const CourseCard = ({course}) => {
    const {title,image,price,category} = course
    return (
        <div className="card bg-base-100 w-64 shadow-sm mt-3 mb-3 transform transition duration-300 hover:scale-105">
            <figure>
                <img
                className='w-full h-64 object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <p className='text-blue-500'>{category}</p>
                <h2 className="card-title font-bold">{title}</h2>
                <div className="divider"></div>
                <div className="">
                    <div className='flex justify-between items-center'>
                        <p className='text-xl text-blue-500'>${price}</p>
                        <FaBookmark className='text-blue-500 text-2xl'></FaBookmark>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;