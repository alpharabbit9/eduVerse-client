import React, { useContext, useState } from 'react';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import StudentCourseCard from './StudentCourseCard/StudentCourseCard';

const EnrollCourse = () => {

    const { user } = useContext(AuthContext)

    const axiosSecure = UseAxiosSecure()

    const [adminButton, setAdminButton] = useState(true)

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {

            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;

        }
    })
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">My Enroll Classes</h1>
            <div className="divider"></div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    payments.map(payment => <StudentCourseCard payment={payment}></StudentCourseCard>)
                }
            </div>


        </div>
    );
};

export default EnrollCourse;