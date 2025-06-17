
import { FaStackExchange } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { data, Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";


const Dashboard = () => {

    const { user } = useContext(AuthContext)
   

    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-12">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    <FaStackExchange></FaStackExchange>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-gray-200 text-gray-900 min-h-full w-80 px-8 py-12">
                    {/* Sidebar content here */}
                    <div className="flex items-center gap-3 mb-6">
                        <div>
                            <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                        </div>
                        <div>
                            <h6 className="font-bold">{user?.displayName}</h6>
                            <p>{user?.email}</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Admin  Routes */}

                    <NavLink
                        to="/dashboard/adminProfile"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                : "btn bg-white text-black w-full rounded-3xl mb-3"
                        }
                    >
                        My Profile
                    </NavLink>

                    <NavLink
                        to="/dashboard/allUsers"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                : "btn bg-white text-black w-full rounded-3xl mb-3"
                        }
                    >
                        Manage Users
                    </NavLink>

                    {/* Teacher Routes */}
                    <NavLink
                        to="/dashboard/teacherReq"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                : "btn bg-white text-black w-full rounded-3xl mb-3"
                        }
                    >
                        Teacher Requests
                    </NavLink>
                    <NavLink
                        to="/dashboard/addClass"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                : "btn bg-white text-black w-full rounded-3xl mb-3"
                        }
                    >
                        Add Course
                    </NavLink>


                    <div className="divider"></div>


                    <Link to={'/'} className="btn bg-white w-full rounded-3xl mb-3">
                        Home
                    </Link>
                    <Link to={'/'} className="btn bg-white w-full rounded-3xl mb-3">
                        About
                    </Link>
                    <Link to={'/'} className="btn bg-white w-full rounded-3xl mb-3">
                        Contact
                    </Link>

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;