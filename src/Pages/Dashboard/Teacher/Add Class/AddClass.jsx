import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/Axios Secure/UseAxiosSecure";
import Swal from "sweetalert2";


const AddClass = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure()

    const HandleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const image = form.image.value;
        const description = form.description.value;

        console.log(title, name, email, price, image, description)

        const courseData = {

            title,
            category,
            name,
            email,
            image,
            description,
            price,
            status: "pending"

        }


        axiosSecure.post('/courses', courseData)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Course Add Request Successful",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-center">Add Course</h1>
            <div className="divider"></div>

            <div className="card  w-full max-w-lg mx-auto">
                <div className="card-body">
                    <fieldset className="fieldset">

                        <form onSubmit={HandleSubmit}>

                            <div className="md:flex justify-between gap-4">
                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">Course Title</legend>
                                    <input name="title" type="text" className="input rounded-3xl " placeholder="Type here" />

                                </div>
                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">Category</legend>
                                    <input name="category" type="text" className="input rounded-3xl" placeholder="Type here" />

                                </div>
                            </div>

                            <div className="md:flex justify-between gap-4">
                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">Name</legend>
                                    <input value={user?.displayName} readOnly name="name" type="text" className="input rounded-3xl" placeholder="Type here" />

                                </div>

                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">Email</legend>
                                    <input value={user?.email} readOnly name="email" type="email" className="input rounded-3xl" placeholder="Type here" />

                                </div>
                            </div>
                            <div className="md:flex justify-between gap-4">
                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">price</legend>
                                    <input name="price" type="text" className="input rounded-3xl" placeholder="Type here" />

                                </div>

                                <div className="md:w-1/2">
                                    <legend className="fieldset-legend">Image URL</legend>
                                    <input name="image" type="text" className="input rounded-3xl" placeholder="Type here" />

                                </div>
                            </div>

                            <div>
                                <legend className="fieldset-legend">Description</legend>
                                <input name="description" type="text" className="input rounded-3xl w-full" placeholder="Type here" />

                            </div>


                            <button className="btn btn-block bg-black mt-3 rounded-3xl text-white">Add Course</button>

                        </form>



                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default AddClass;