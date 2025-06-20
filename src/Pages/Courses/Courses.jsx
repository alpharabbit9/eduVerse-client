import { useEffect, useState } from 'react';
import banner from '../../assets/images/Icons/entrepreneurs-meeting-office.jpg'
import SectiionCover from '../../Components/SectionCover/SectiionCover';
import axios from 'axios';
import Card from '../../Components/Card/Card';

const Courses = () => {

    const [courses, setCourses] = useState([]);


    useEffect(() => {
        axios.get('https://edu-verse-server-site-rifat-ahmeds-projects-07d383b5.vercel.app/confirmedCourse')
            .then(res => {
                console.log(res.data)
                setCourses(res.data)
            })


    }, [])


    return (
        <div>

            <SectiionCover image={banner} title={"Find the Perfect Course for Your Growth Journey"} subtiitle={"From tech to creativity – learn at your own pace, on your own schedule"}></SectiionCover>


            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 md:mt-16'>

                {
                    courses.map(course => <Card course={course} key={course._id}></Card>)
                }

            </div>
        </div>
    );
};

export default Courses;