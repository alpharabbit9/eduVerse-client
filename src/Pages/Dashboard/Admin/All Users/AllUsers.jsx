import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/Axios Secure/UseAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";


const AllUsers = () => {

    const axiosSecure = UseAxiosSecure()

    const [adminButton ,  setAdminButton] = useState(true)

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })

    const HandleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }

                        refetch()
                    })

            }
        });

    }


    const HandleAdmin = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        refetch();

                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Success",
                                text: "Role Changed to Admin",
                                icon: "success"
                            });
                        }

                        setAdminButton(false)
                    })

            }
        });


    }





    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Manage Registered Users</h1>
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
                            <th>Role</th>
                            <th>Customize Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, index) =>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user?.name}</div>
                                                <div className="text-sm opacity-50">{user?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {user?.role}

                                    </td>
                                    <td>
                                        <button disabled={user.role === 'admin'} onClick={() => HandleAdmin(user._id)} className="btn  bg-red-600 text-white rounded-3xl ">Make Admin</button>
                                    </td>
                                    <th>
                                        <button  onClick={() => HandleDelete(user._id)} className="btn btn-ghost btn-xs">
                                            <FaTrashAlt className="text-2xl text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default AllUsers;