import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const GoogleLogIn = () => {

    const { googleSignIn, setUser } = useContext(AuthContext)



    const navigate = useNavigate()

    const HandleGoogle = () => {


        googleSignIn()
            .then(res => {
                console.log("logged in user :", res.user)
                setUser(res.user)


                const userData = {
                    name: res.user.displayName,
                    email: res.user.email,
                    image: res.user.photoURL,
                    role: 'student'

                }

                axios.post('http://localhost:5000/users', userData)
                    .then(results => {
                        console.log(results.data)
                    })

                navigate('/')


            })

    }
    return (
        <div>
            <button onClick={HandleGoogle} className='btn btn-block btn-outline'>
                <FaGoogle></FaGoogle> Log in With Google
            </button>
        </div>
    );
};

export default GoogleLogIn;