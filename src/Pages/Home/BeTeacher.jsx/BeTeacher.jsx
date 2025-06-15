import { Link } from 'react-router-dom';
import teacherBg from '../../../assets/images/Banner/young-woman-attending-online-class.jpg'

const BeTeacher = () => {
    return (
        <div
            className="hero min-h-screen bg-fixed"
            style={{
                backgroundImage:
                    `url(${teacherBg})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Join Eduverse as a Teacher</h1>
                    <p className="mb-5">
                        Make a difference—educate, guide, and inspire the next generation.
                    </p>
                   <Link to={'/teacherForm'}>
                    <button className="btn bg-blue-600 text-white rounded-3xl">Start Teaching Today</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default BeTeacher;