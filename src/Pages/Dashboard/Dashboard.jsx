import { FaStackExchange } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../Hooks/Axios Secure/UseAxiosSecure";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/users/profileDetails/${user.email}`).then((res) => {
                setUserData(res.data);
            });
        }
    }, [axiosSecure, user?.email]);

    if (!userData) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    const userRole = userData.role;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-12">
                <Outlet />
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    <FaStackExchange />
                </label>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-gray-200 text-gray-900 min-h-full w-80 px-8 py-12">
                    <div className="flex items-center gap-3 mb-6">
                        <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                        <div>
                            <h6 className="font-bold">{user?.displayName}</h6>
                            <p>{user?.email}</p>
                            <p className="text-blue-600 capitalize text-sm">{userRole}</p>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Common route */}
                    <NavLink
                        to="/dashboard/profile"
                        className={({ isActive }) =>
                            isActive
                                ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                : "btn bg-white text-black w-full rounded-3xl mb-3"
                        }
                    >
                        My Profile
                    </NavLink>

                    {/* Admin routes */}
                    {userRole === "admin" && (
                        <>
                            <NavLink
                                to="/dashboard/allCourse"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                        : "btn bg-white text-black w-full rounded-3xl mb-3"
                                }
                            >
                                All Courses
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
                        </>
                    )}

                    {/* Teacher routes */}
                    {userRole === "teacher" && (
                        <>
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
                            <NavLink
                                to="/dashboard/teacherClass"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                        : "btn bg-white text-black w-full rounded-3xl mb-3"
                                }
                            >
                                Teacher Class
                            </NavLink>
                        </>
                    )}

                    {/* Student routes */}
                    {userRole === "student" && (
                        <NavLink
                            to="/dashboard/enrollClass"
                            className={({ isActive }) =>
                                isActive
                                    ? "btn bg-black text-white w-full rounded-3xl mb-3"
                                    : "btn bg-white text-black w-full rounded-3xl mb-3"
                            }
                        >
                            My Enroll Class
                        </NavLink>
                    )}

                    <div className="divider"></div>

                    {/* Public Links */}
                    <Link to="/" className="btn bg-white w-full rounded-3xl mb-3">
                        Home
                    </Link>
                    <Link to="/about" className="btn bg-white w-full rounded-3xl mb-3">
                        About
                    </Link>
                    <Link to="/contact" className="btn bg-white w-full rounded-3xl mb-3">
                        Contact
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
