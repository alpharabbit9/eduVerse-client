import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SectiionCover from '../../../Components/SectionCover/SectiionCover';
import { FaBook, FaClock, FaGraduationCap, FaHandSparkles } from 'react-icons/fa';
import { FaFlag, FaGlobe } from 'react-icons/fa6';

const CourseDetails = () => {

    const { id } = useParams();
    // console.log(id)

    const [course, setCourse] = useState([]);
    const { name, title, image, price, category, short_description, total_enrolment } = course


    useEffect(() => {


        axios.get(`http://localhost:5000/courses/${id}`)
            .then(res => {
                // console.log(res.data)
                setCourse(res.data)
            })
    }, [id])


    return (
        <div>
            <div className='mb-4 md:mb-12'>
                <SectiionCover image={image} title={title} subtiitle={"Empower your skills"}></SectiionCover>
            </div>
            <div className='w-11/12 mx-auto md:flex gap-5'>
                <div className='mb-6 md:mb-12'>
                    <div className="flex w-full mb-6">
                        <div className="card  grid h-20 grow place-items-center"><h6 className='text-gray-600 font-bold'>Teacher : {name}</h6></div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card  grid h-20 grow place-items-center"><h6 className='text-gray-600 font-bold'>Category : {category}</h6></div>
                    </div>

                    <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
                    <h3 className='text-2xl md:text-4xl mt-3'>Earn a University of London degree in Computer Science</h3>
                    <p className='text-gray-600 mt-3'>{short_description}</p>

                    <div className='grid grid-cols-2 md:grid-cols-3 mt-6'>
                        <div className='flex items-center gap-2'>
                            <FaClock></FaClock>
                            <span>Duration : 4 Week</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaBook></FaBook>
                            <span>Lecture : 12 </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaGlobe></FaGlobe>
                            <span>Language : English </span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaGraduationCap></FaGraduationCap>
                            <span>Skill Level : beginner</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaHandSparkles></FaHandSparkles>
                            <span>Quiz : 5</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaFlag></FaFlag>
                            <span>Full Access</span>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="card w-96 bg-base-100 shadow-sm">
                        <div className="card-body">
                            <span className="badge badge-xs badge-warning">Most Popular</span>
                            <div className="flex justify-between">
                                <h2 className="text-4xl text-center font-bold">${price}</h2>
                                {/* <span className="text-2xl">${price}</span> */}
                            </div>

                            
                            <div className="mt-6">
                                <button className="btn bg-[#2ED47D] btn-block">Buy Now</button>
                            </div>

                            <div className='text-gray-600'>
                                <p>
                                    IT support is projected to grow 10% between 2018 and 2028 — faster than the average of all other occupations, BLS (2019)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;