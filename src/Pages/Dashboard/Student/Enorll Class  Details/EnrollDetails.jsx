
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';
import SectiionCover from '../../../../Components/SectionCover/SectiionCover';

const EnrollDetails = () => {

    const [course , setCourse] = useState({})
    const axiosSecure = UseAxiosSecure()

    const {id} = useParams()

    useEffect(() => {

        axiosSecure.get(`/payments/details/${id}`)
        .then(res =>{
            console.log(res.data)
            setCourse(res.data)
        })
    } , [id , axiosSecure])
    return (
        <div>
            <div>
                <SectiionCover  title={'Enrollment Details'} subtiitle={'Complete information about your selected course'} image={course.image} ></SectiionCover>
            </div>

            <div className='p-7 text-gray-700'>
                <h3 className="font-bold mb-5 text-3xl">{course.course_title}</h3>

                <p>{course.description}</p>

            </div>

            <div className="divider"></div>
            
            <div className='p-7'>
                <h2 className='text-gray-700 font-bold text-3xl'>Pending Assignments</h2>
            </div>




        </div>
    );
};

export default EnrollDetails;