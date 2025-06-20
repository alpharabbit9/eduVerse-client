import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import CourseDetails from "../Pages/Courses/Course Details/CourseDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminProfiile from "../Pages/Dashboard/Profile/Profiile";
import AllUsers from "../Pages/Dashboard/Admin/All Users/AllUsers";
import TeacherForm from "../Pages/Home/BeTeacher.jsx/Teacher Form/TeacherForm";
import TeacherReq from "../Pages/Dashboard/Admin/Teacher Request/TeacherReq";
import AddClass from "../Pages/Dashboard/Teacher/Add Class/AddClass";
import AllClass from "../Pages/Dashboard/Admin/All Classes/AllClass";
import MyTeacherClass from "../Pages/Dashboard/Teacher/My Class/myTeacherClass";
import ResultFetcher from "../Components/ResultFetcher";
import PaymentForm from "../Payment/PaymentForm";
import EnrollCourse from "../Pages/Dashboard/Student/My Enroll Class/EnrollCourse";
import EnrollDetails from "../Pages/Dashboard/Student/Enorll Class  Details/EnrollDetails";
import Profile from "../Pages/Dashboard/Profile/Profiile";
import PrivateRoute from "./PrivateRoute";


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
                    element: <PrivateRoute>
                        <CourseDetails></CourseDetails>
                    </PrivateRoute>
                },
                {
                    path: 'courses/payment/:id',
                    element: <PrivateRoute>
                        <PaymentForm></PaymentForm>
                    </PrivateRoute>
                },
                {
                    path: '/teacherForm',
                    element: <PrivateRoute>
                        <TeacherForm></TeacherForm>
                    </PrivateRoute>
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
            element: <PrivateRoute>
                <Dashboard></Dashboard>
            </PrivateRoute>,
            children: [
                // Admin Routes
                {
                    path: '/dashboard/profile',
                    element: <Profile></Profile>
                },
                {
                    path: '/dashboard/allUsers',
                    element: <AllUsers></AllUsers>
                },
                {
                    path: '/dashboard/teacherReq',
                    element: <TeacherReq></TeacherReq>
                },
                {
                    path: '/dashboard/allCourse',
                    element: <AllClass></AllClass>
                },

                // Teacher Routes
                {

                    path: '/dashboard/addClass',
                    element: <AddClass></AddClass>

                },
                {

                    path: '/dashboard/teacherClass',
                    element: <MyTeacherClass></MyTeacherClass>

                },
                {

                    path: '/dashboard/result',
                    element: <ResultFetcher></ResultFetcher>

                },
                // Student Routes
                {

                    path: '/dashboard/enrollClass',
                    element: <EnrollCourse></EnrollCourse>

                },
                {

                    path: '/dashboard/enrollDetails/:id',
                    element: <EnrollDetails></EnrollDetails>

                },

            ]
        }
    ]
)

export default Router;