import React, { useContext } from 'react';
import { FaScroll } from 'react-icons/fa6';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import Card from '../../../../Components/Card/Card';
import TeacherCard from '../Teacher Card/TeacherCard';

const MyTeacherClass = () => {

    const axiosSecure = UseAxiosSecure()
    const { user } = useContext(AuthContext);



    const { data: courses = [] , refetch} = useQuery({
        queryKey: ['courses' , user?.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/courses/${user?.email}`)
            return res.data;

        }
    })

    return (
        <div className='p-0'>

            <h1 className="text-xl md:text-3xl font-bold mb-6">
                <div className='flex items-center gap-3'>
                    <FaScroll></FaScroll>
                    My Added Courses
                </div>
            </h1>
            <div className="divider"></div>

            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 md:mt-16'>

                {
                    courses.map(course => <TeacherCard course={course} key={course._id} reload ={refetch}></TeacherCard>)
                }
                

            </div>

        </div>
    );
};

export default MyTeacherClass;