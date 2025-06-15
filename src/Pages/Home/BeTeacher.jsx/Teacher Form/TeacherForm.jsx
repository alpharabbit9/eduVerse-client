import { useContext, useState } from 'react';
import formBG from '../../../../assets/images/Banner/close-up-team-members-working.jpg'
import { AuthContext } from '../../../../Provider/AuthProvider/AuthProvider';
import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';
import Swal from 'sweetalert2';

const TeacherForm = () => {

    const [submitted, setSubmitted] = useState(false);
    const { user } = useContext(AuthContext)

    const axiosSecure = UseAxiosSecure()

    const HandleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const teacher_name = form.name.value;
        const teacher_image = form.image.value
        const teacher_email = form.email.value;
        const experience = form.experience.value;
        const title = form.title.value;
        const category = form.category.value;



        const requestData = {

            teacher_name,
            teacher_image,
            teacher_email,
            experience,
            title,
            category,
            status: "pending"
        }


        axiosSecure.post('/teacherRequest', requestData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Submitted for review",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                setSubmitted(true)

            })
    }
    return (
        <div className='md:flex '>

            <div className='md:w-1/2 px-15 py-15 md:py-20  '>

                <h3 className='text-2xl md:text-4xl font-bold'>Your Teaching Journey Begins Here</h3>
                <p className='text-gray-600'>Turn your passion into purpose by teaching at Eduverse.</p>

                <div className="card  w-full max-w-sm  mt-6 md:mt-10">
                    <form onSubmit={HandleSubmit} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input readOnly value={user?.displayName} name='name' type="text" className="input" placeholder="Name" />
                            <label className="label">Your Image</label>
                            <input readOnly Value={user?.photoURL} name='image' type="text" className="input" placeholder="" />
                            <label className="label">Email</label>
                            <input readOnly defaultValue={user?.email} name='email' type="text" className="input" placeholder="Name" />
                            <label className="label">Experience</label>
                            <select name='experience' defaultValue="Pick a color" className="select">
                                <option disabled={true}>Experience</option>
                                <option>Beginner</option>
                                <option>Mid-level</option>
                                <option>Experienced</option>
                            </select>

                            <label className="label">Title</label>
                            <input name='title' type="text" className="input" placeholder="Title" />
                            <label className="label">Category</label>
                            <select name='category' defaultValue="Pick a color" className="select">
                                <option disabled={true}></option>
                                <option>Web Development</option>
                                <option>Digital Marketing</option>
                                <option>Mobile Development</option>
                                <option>Blockchain</option>
                                <option>Business</option>
                                <option>Photography</option>
                                <option>Language</option>
                                <option>Finance</option>
                                <option>Writing</option>
                                <option>Productivity</option>

                            </select>


                            <button className="btn btn-neutral mt-4" disabled={submitted}>
                                {submitted ? '✅ Submitted' : 'Submit for review'}
                            </button>
                        </fieldset>
                    </form>
                </div>

            </div>

            <div className='md:w-1/2 h-screen'>
                <img className='h-screen w-full object-cover' src={formBG} alt="" />
            </div>
        </div>
    );
};

export default TeacherForm;