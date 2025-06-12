import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/Course Details/CourseDetails";


const Router =  createBrowserRouter(
    [
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                },
                {
                    path:'courses',
                    element:<Courses></Courses>
                },
                {
                    path:'courses/:id',
                    element:<CourseDetails></CourseDetails>
                }
            ]
        }
    ]
)

export default Router;