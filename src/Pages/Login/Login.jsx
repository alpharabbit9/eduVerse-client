import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/Login/Data_security_01.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    const { logInUser, setUser } = useContext(AuthContext)

    const navigate = useNavigate()

    const HandleSubmit = (e) => {

        e.preventDefault()

        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)


        logInUser(email, password)
            .then(res => {
                console.log(res.user)
                setUser(res.user)
                navigate('/')
                if (res.user.insertedId) {
                    Swal.fire({
                        position: "Center",
                        icon: "success",
                        title: "Welcome back to eduVerse",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className='md:flex'>

            <div className='md:w-1/2 px-15 py-15 md:py-20 '>

                <h3 className='text-2xl md:text-4xl font-bold'>Unlock Your Learning</h3>
                <p className='text-gray-600'>Continue where you left off — learning never stops.</p>

                <div className="card  w-full max-w-sm  mt-6 md:mt-10">
                    <form onSubmit={HandleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p>New here ? <Link className='text-blue-700' to={'/register'}>Create an account</Link></p>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </form>
                </div>

            </div>

            <div className='md:w-1/2'>
                <img src={loginImg} alt="" />
            </div>
        </div>
    );
};

export default Login;