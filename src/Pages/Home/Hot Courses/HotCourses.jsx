import { useEffect, useState } from "react";
import CourseCard from "../../../Components/Course  Card/CourseCard";


const HotCourses = () => {

    const [courses ,  setCourses]  = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/learnToday')
        .then(res =>  res.json())
        .then(data =>{
            setCourses(data)

        })
    },[])
    return (
        <div  className='w-11/12 mx-auto mt-3 md:mt-6 mb-3 md:mb-6'>
            <h3 className='text-2xl md:text-4xl font-bold mb-3 md:mb-6'>What do you want to learn today ?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-3 gap-4">

                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }

            </div>
        </div>
    );
};

export default HotCourses;