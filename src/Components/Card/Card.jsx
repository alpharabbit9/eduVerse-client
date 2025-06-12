import { FaBookmark, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Card = ({ course }) => {
    const { _id, title, image, price, category, short_description, total_enrolment } = course
    return (
        <Link to={`/courses/${_id}`}>
            <div className="card bg-base-100 w-96 shadow-sm mt-3 mb-3 transform transition duration-300 hover:scale-105">
                <figure>
                    <img
                        className='w-full h-64 object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className='text-blue-500'>{category}</p>
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-gray-600">{short_description}</p>
                    <div className="divider"></div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaUser></FaUser>
                        <p>{total_enrolment} Students</p>
                    </div>
                    <div className="">
                        <div className='flex justify-between items-center'>
                            <p className='text-xl text-blue-500'>${price}</p>
                            <FaBookmark className='text-blue-500 text-2xl'></FaBookmark>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Card;