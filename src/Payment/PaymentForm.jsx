import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UseAxiosSecure from '../Hooks/Axios Secure/UseAxiosSecure';
import Swal from 'sweetalert2';

const PaymentForm = () => {

    const { user } = useContext(AuthContext);


    const { id } = useParams()


    const [course, setCourse] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate() 

    const axiosSecure = UseAxiosSecure()

    useEffect(() => {
        axios.get(`http://localhost:5000/confirmedCourse/id/${id}`)
            .then(res => {
                setCourse(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch course:", err);
                setLoading(false);
            });
    }, [id]);


    const HandleSubmit = (e) => {

        e.preventDefault();


        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const card = form.cardNumber.value;


        const paymentDoc = {
            name,
            email,
            teacher_name : course.name,
            image : course.image,
            description:course.short_description,
            course_id: course._id,
            course_title: course.title,
            category : course.category,
            card,
            payment_date: new Date()
        }

        axiosSecure.post('/payments', paymentDoc)
            .then(res => {

                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "payment Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });


                    navigate('/dashboard/enrollClass')

                    
                }

            })
    }






    return (
        <div className='flex justify-center items-center'>
            <div className='text-center p-6'>
                <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-3'>Confirm Your Enrollment</h1>
                <p>Choose your payment method and secure your spot today.</p>

                <form onSubmit={HandleSubmit} className='mt-4 text-left '>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input readOnly defaultValue={user?.displayName} name='name' type="text" className="input w-full rounded-3xl" placeholder="Type here" />
                        <legend className="fieldset-legend">Email Address</legend>
                        <input readOnly defaultValue={user?.email} name='email' type="email" className="input w-full rounded-3xl" placeholder="Type here" />
                        <legend className="fieldset-legend">Card number</legend>
                        <input name='cardNumber' type="text" className="input w-full rounded-3xl" placeholder="Type here" />
                        <legend className="fieldset-legend">Expiry Date</legend>
                        <input name='payment_date' type="date" className="input w-full rounded-3xl" placeholder="Type here" />
                        <legend className="fieldset-legend">CVC/CVC Code</legend>
                        <input type="text" className="input w-full rounded-3xl" placeholder="Type here" />
                        <legend className="fieldset-legend">Zip code</legend>
                        <input type="text" className="input w-full rounded-3xl" placeholder="Type here" />

                    </fieldset>


                    <button className='btn btn-block bg-blue-600 rounded-3xl mt-3 text-white'>Pay</button>

                </form>
            </div>
        </div>
    );
};

export default PaymentForm;