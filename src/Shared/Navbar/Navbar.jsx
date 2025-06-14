import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/icons8-education-48.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import noUser from '../../assets/images/Login/noSuser.jpg'
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, userLogOut } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {

        userLogOut()
            .then(res => {

                navigate('/login')

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });



            })

    }
    const links = <>

        <li>
            <NavLink to={'/'}><a>Home</a></NavLink>
        </li>
        <li>
            <NavLink to={'/courses'}><a>Courses</a></NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-12 md:w-10/12 mx-auto rounded-3xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}

                    </ul>
                </div>
                <a className="btn btn-ghost text-lg md:text-xl">
                    <img src={logo} className="w-11" alt="" />
                    EduVerse Academy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user && user?.email ?
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user.photoURL} />
                                    :
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={noUser} />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        <li><a>{user?.displayName}</a></li>
                        <Link to={'/dashboard/adminProfile'}>
                        <li><a>Dashboard</a></li>
                        </Link>
                        <li>
                            {user && (
                                <button onClick={handleLogout} className="btn bg-blue-600 text-white">
                                    Logout
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;