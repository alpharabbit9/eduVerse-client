import { useContext } from 'react';
import registerBg from '../../assets/images/Login/Wavy_Gen-01_Single-07.jpg'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {

    const { createUser, setUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const HandleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;


        

        // console.log(userData)

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setUser(res.user)
                if (res.user.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Welcome to EduVerse Academy",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                updateUser({ displayName: name, photoURL: photo })
                    .then(result => {
                        const userData = {
                            name : res.user.displayName,
                            email : res.user.email,
                            image : res.user.photoURL,
                            role : 'student'

                        }

                        axios.post('http://localhost:5000/users',userData)
                        .then(results =>{
                            console.log(results.data)
                        })
                        navigate('/')




                    })

            })



    }
    return (
        <div className='md:flex h-screen'>

            <div className='md:w-1/2 px-10 py-15 md:py-20 '>

                <h3 className='text-2xl md:text-4xl font-bold'>Unlock Your Learning</h3>
                <p className='text-gray-600'>Continue where you left off — learning never stops.</p>

                <div className="card  w-full max-w-sm  mt-6 md:mt-10">
                    <form onSubmit={HandleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            {/* <label className="label">Name</label> */}
                            <input name='name' type="text" className="input" placeholder="Name" />
                            {/* <label className="label">photo URL</label> */}
                            <input name='photo' type="text" className="input" placeholder="photo URL" />
                            {/* <label className="label">Email</label> */}
                            <input name='email' type="email" className="input" placeholder="Email" />
                            {/* <label className="label">Password</label> */}
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>

            </div>

            <div className='md:w-1/2 h-screen'>
                <img src={registerBg} alt="" />
            </div>
        </div>
    );
};

export default Register;