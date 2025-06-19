import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SectiionCover from '../../../Components/SectionCover/SectiionCover';
import { FaBook, FaClock, FaGraduationCap, FaHandSparkles } from 'react-icons/fa';
import { FaFlag, FaGlobe } from 'react-icons/fa6';

const CourseDetails = () => {
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:5000/confirmedCourse/id/${id}`)
            .then(res => {
                setCourse(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch course:", err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p className="text-center text-lg mt-10">Loading course details...</p>;
    if (!course?._id) return <p className="text-center text-red-600 mt-10">Course not found.</p>;

    const { name, title, image, price, category, description } = course;

    return (
        <div>
            <div className='mb-4 md:mb-12'>
                <SectiionCover image={image} title={title} subtiitle="Empower your skills" />
            </div>

            <div className='w-11/12 mx-auto md:flex gap-5'>
                {/* Left Section */}
                <div className='mb-6 md:mb-12 flex-1'>
                    <div className="flex w-full mb-6">
                        <div className="card grid h-20 grow place-items-center">
                            <h6 className='text-gray-600 font-bold'>Teacher: {name}</h6>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <div className="card grid h-20 grow place-items-center">
                            <h6 className='text-gray-600 font-bold'>Category: {category}</h6>
                        </div>
                    </div>

                    <h2 className='text-2xl md:text-4xl font-bold'>{title}</h2>
                    <h3 className='text-xl md:text-2xl mt-3 text-gray-700'>
                        Earn a University of London degree in Computer Science
                    </h3>
                    <p className='text-gray-600 mt-3'>{description}</p>

                    <div className='grid grid-cols-2 md:grid-cols-3 mt-6 gap-4 text-gray-700'>
                        <div className='flex items-center gap-2'><FaClock /> Duration: 4 Week</div>
                        <div className='flex items-center gap-2'><FaBook /> Lecture: 12</div>
                        <div className='flex items-center gap-2'><FaGlobe /> Language: English</div>
                        <div className='flex items-center gap-2'><FaGraduationCap /> Skill Level: Beginner</div>
                        <div className='flex items-center gap-2'><FaHandSparkles /> Quiz: 5</div>
                        <div className='flex items-center gap-2'><FaFlag /> Full Access</div>
                    </div>
                </div>

                {/* Right Side: Price Card */}
                <div>
                    <div className="card w-96 bg-base-100 shadow-sm border">
                        <div className="card-body">
                            <span className="badge badge-warning text-xs">Most Popular</span>
                            <div className="flex justify-between items-center mt-2">
                                <h2 className="text-4xl font-bold text-green-600">${price}</h2>
                            </div>

                            <div className="mt-6">
                                <Link to={`/courses/payment/${id}`}>
                                    <button course={course} className="btn bg-[#2ED47D] btn-block hover:bg-[#26bd70]">
                                        Enroll Now
                                    </button>
                                </Link>
                            </div>

                            <div className='text-gray-600 mt-4 text-sm'>
                                <p>
                                    IT support is projected to grow 10% between 2018 and 2028 — faster than the average of all other occupations (BLS, 2019).
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
