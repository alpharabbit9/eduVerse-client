
import { FaGraduationCap } from 'react-icons/fa';
import abt1 from '../../../assets/images/attractive-male-university-student-doing-some-homework-school-library-smiling.jpg'
import abt2 from '../../../assets/images/portrait-three-serious-students-studying-library.jpg'
import { FaClock, FaComputerMouse, FaPeopleGroup } from 'react-icons/fa6';

const About = () => {
    return (
        <div className='md:flex justify-between p-16 gap-3 md:gap-6'>

            <div className='md:w-1/2 py-9'>
                <p className='text-blue-500 font-bold mb-3 '>Learn how you want, where you want</p>
                <h3 className='text-2xl md:text-4xl font-bold mb-3'>The world’s largest selection of online courses</h3>
                <p className='text-gray-600 mb-6 md:mb-9'>Millions of people have used Kingster to decide which online course to take. We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist. Our goal is to make online education work for everyone.</p>

                <div className='md:flex gap-4 md:gap-6 mb-5'>
                    <div className='flex items-center gap-2'>
                        <FaGraduationCap className='text-blue-500 text-4xl'></FaGraduationCap>
                        <span>Private Classes</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaPeopleGroup className='text-4xl text-blue-500'></FaPeopleGroup>
                        <span> Small Groups</span>
                    </div>

                    
                </div>
                <div className='md:flex gap-4 md:gap-6'>
                    <div className='flex items-center gap-2'>
                        <FaClock className='text-blue-500 text-4xl'></FaClock>
                        <span>LifeTime Access</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaComputerMouse className='text-blue-500 text-4xl'></FaComputerMouse>
                        <span> Online Tutoring</span>
                    </div>

                    
                </div>
            </div>
            <div className='md:w-1/2'>
                <img className='rounded-2xl' src={abt2} alt="" />
            </div>

        </div>
    );
};

export default About;