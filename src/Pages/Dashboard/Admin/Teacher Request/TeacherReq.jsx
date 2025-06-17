import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';

const TeacherReq = () => {


    // const {user} = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()

    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {

            const res = await axiosSecure.get('/teacherRequest')
            return res.data;

        }
    })

    const HandleAccept = (reqId, reqEmail) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make Teacher!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/teacher/${reqEmail}`)
                    .then(res => {

                        console.log(res.data)

                        axiosSecure.patch(`/teacherRequest/${reqId}`)
                            .then(result => {

                                if (result.data.modifiedCount > 0) {

                                    Swal.fire({
                                        title: "Updated!",
                                        text: "Role Updated to Teacher",
                                        icon: "success"
                                    });

                                    refetch()

                                }
                            })
                    })





            }
        });


    }

    const handleReject = (id, reqEmail) => {

        Swal.fire({
            title: "Are you sure to reject?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/reject/${reqEmail}`)
                    .then(result => {
                        axiosSecure.patch(`/teacherRequest/reject/${id}`)
                            .then(res => {
                                if (res.data.modifiedCount > 0) {
                                    Swal.fire({
                                        title: "Rejected!",
                                        text: "Request Rejected.",
                                        icon: "success"
                                    });
                                }
                            })
                    })

                    refetch()

            }
        });

    }
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
                                            className={`btn rounded-3xl text-white ${request?.status === 'Approved' ? 'bg-blue-500' : 'bg-orange-500'
                                                }`}
                                        >
                                            {request?.status}
                                        </p>

                                    </td>
                                    <td>
                                        <button
                                            disabled={request.status === 'Approved' || request.status === "Rejected"}
                                            onClick={() => HandleAccept(request._id, request.teacher_email)}
                                            className="btn bg-green-500 text-white rounded-3xl"
                                        >
                                            Accept
                                        </button>

                                    </td>
                                    <td>
                                        <button disabled = { request.status === "Rejected" } onClick={() => handleReject(request._id, request.teacher_email)} className="btn  bg-red-600 text-white rounded-3xl ">Reject</button>

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