import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/Course Details/CourseDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfiile from "../Pages/Dashboard/Admin/Admin Profile/AdminProfiile";
import AllUsers from "../Pages/Dashboard/Admin/All Users/AllUsers";
import TeacherForm from "../Pages/Home/BeTeacher.jsx/Teacher Form/TeacherForm";
import TeacherReq from "../Pages/Dashboard/Admin/Teacher Request/TeacherReq";


const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'courses',
                    element: <Courses></Courses>
                },
                {
                    path: 'courses/:id',
                    element: <CourseDetails></CourseDetails>
                },
                {
                    path:'/teacherForm',
                    element:<TeacherForm></TeacherForm>
                }
            ]
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'dashboard',
            element:<Dashboard></Dashboard>,
            children:[
                {
                    path:'/dashboard/adminProfile',
                    element:<AdminProfiile></AdminProfiile>
                },
                {
                    path:'/dashboard/allUsers',
                    element:<AllUsers></AllUsers>
                },
                {
                    path:'/dashboard/teacherReq',
                    element:<TeacherReq></TeacherReq>
                }
            ]
        }
    ]
)

export default Router;