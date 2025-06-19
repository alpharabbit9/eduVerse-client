import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../Hooks/Axios Secure/UseAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import { FaPhone, FaUser } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      axiosSecure.get(`/users/profileDetails/${user.email}`)
        .then(res => {
          setUserData(res.data);
        })
        .catch(error => {
          console.error("Error fetching profile:", error);
        });
    }
  }, [axiosSecure, user?.email]);

  // ✅ Don't render if userData is still loading
  if (!userData) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Details</h1>
      <div className="divider"></div>

      <div className="hero bg-base-200 min-h-20 p-6">
        <div className="hero-content gap-5 flex-col lg:flex-row-reverse">
          <img
            src={userData.image}
            className=" w-full object-cover rounded-lg shadow-2xl"
            alt="Profile"
          />
          <div className='mr-3'>
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p className="mb-3 mt-3 text-gray-700 font-semibold flex items-center gap-2">
              <FaUser /> Role : {userData.role}
            </p>
            <p className="mb-3 mt-3 text-gray-700 font-semibold flex items-center gap-2">
              <FaMessage /> Email : {userData.email}
            </p>
            <p className="mt-3 text-gray-700 mb-3 font-semibold flex items-center gap-2">
              <FaPhone /> Phone : 017586276547
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
