import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../Hooks/Axios Secure/UseAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";


const AllUsers = () => {

    const axiosSecure = UseAxiosSecure()

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {

            const res = await axiosSecure.get('/users')
            return res.data;

        }
    })





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
                            users.map((user , index)  =>
                                <tr>
                                    <th>
                                       {index +1}
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
                                        <button className="btn  bg-red-600 text-white rounded-3xl ">Make Admin</button>
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">
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