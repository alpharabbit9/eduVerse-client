import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';

const TeacherReq = () => {

    const axiosSecure = UseAxiosSecure()

    const { data: requests = [] } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {

            const res = await axiosSecure.get('/teacherRequest')
            return res.data;

        }
    })
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Teacher Requests</h1>
            <div className="divider"></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            requests.map((request, index) =>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={request?.teacher_image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{request?.teacher_name}</div>
                                                <div className="text-sm opacity-50">{request?.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='border rounded-3xl px-2 text-center'> {request.title}  </p>

                                    </td>
                                    <td>
                                        <p className='border rounded-3xl px-2 text-center'> {request.category}  </p>
                                    </td>
                                    <td>
                                        <p
                                            className={`btn rounded-3xl text-white ${request?.status === 'approved' ? 'bg-blue-500' : 'bg-orange-500'
                                                }`}
                                        >
                                            {request?.status}
                                        </p>

                                    </td>
                                    <td>
                                        <button className="btn  bg-green-500 text-white rounded-3xl ">Accept</button>

                                    </td>
                                    <td>
                                        <button className="btn  bg-red-600 text-white rounded-3xl ">Reject</button>

                                    </td>

                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default TeacherReq;