import { useContext } from "react";
import { FaBookmark, FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import UseAxiosSecure from "../../../../Hooks/Axios Secure/UseAxiosSecure";


const TeacherCard = ({ course , reload }) => {

    const { user } = useContext(AuthContext)

    const axiosSecure = UseAxiosSecure()

    const { _id, title, image, price, description, status } = course

    const HandleSubmit = (e , id) => {
        e.preventDefault()


        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const description = form.description.value;
        const price = form.price.value ;


        const updateDoc = {

            title,
            image,
            description,
            price
        }

        axiosSecure.put(`/courses/${id}`,updateDoc)
        .then(res => {
            console.log(res.data)
          
        })
    }

    return (
        <div className="card bg-base-100 w-64 shadow-sm mt-3 mb-3 transform transition duration-300 hover:scale-105">
            <figure>
                <img
                    className='w-full h-40 object-cover'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <span className='text-blue-500 rounded-3xl border text-center w-1/2'>{status}</span>
                <h2 className="card-title font-bold">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className='text-xl text-blue-500'>${price}</p>
                <div className="divider"></div>

                <div className="">
                    <div className='flex justify-between items-center'>

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-outline border-blue-600 text-blue-600" onClick={() => document.getElementById('my_modal_5').showModal()}>
                            <FaEdit></FaEdit>
                            Update
                        </button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form onSubmit={() =>HandleSubmit(_id)} className="card-body">
                                    <fieldset className="fieldset">
                                        <label className="label">Course Title</label>
                                        <input  defaultValue={title} name='title' type="text" className="input" placeholder="Name" />
                                        <label className="label">Image</label>
                                        <input  defaultValue={image} name='image' type="text" className="input" placeholder="" />
                                        <label className="label">description</label>
                                        <input  defaultValue={description} name='description' type="text" className="input" placeholder="Name" />
                                        <label className="label">Price</label>
                                        <input  defaultValue={price} name='price' type="text" className="input" placeholder="Name" />
                                        
                                       

                                       
                                        


                                        <button className="btn btn-neutral mt-4">
                                            Update
                                        </button>
                                    </fieldset>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <button className="btn bg-red-600 text-white ">
                            <FaTrashAlt></FaTrashAlt>
                            Delete
                        </button>
                    </div>

                    <button className="btn btn-block bg-blue-600 mb-3 mt-3 text-white">See Details</button>
                </div>
            </div>
        </div>
    );
};

export default TeacherCard;