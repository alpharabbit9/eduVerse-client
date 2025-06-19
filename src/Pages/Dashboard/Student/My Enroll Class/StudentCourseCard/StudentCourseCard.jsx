import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StudentCourseCard = ({ payment }) => {
    return (
        <div className="card bg-amber-50 w-64 shadow-sm mt-3 mb-3 transform transition duration-300 hover:scale-105">

            <div className="card-body">
                <p className='text-blue-500 border  text-center w-2/3 rounded-3xl'>{payment.category}</p>
                <h2 className="card-title font-bold">{payment.course_title}</h2>
                <p className='font-semibold'>by {payment.teacher_name}</p>
                <div className="divider"></div>
                <div className="">
                    <div className='flex justify-between items-center'>

                        <Link to={`/dashboard/enrollDetails/${payment._id}`}>
                            <button className='btn bg-blue-600 text-white'>Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCourseCard;