import { useQuery } from '@tanstack/react-query';

import UseAxiosSecure from '../../../../Hooks/Axios Secure/UseAxiosSecure';

import Swal from 'sweetalert2';

const AllClass = () => {

    const axiosSecure = UseAxiosSecure()



    const { data: courses = [], refetch } = useQuery({
        queryKey: ['courses'],
        queryFn: async () => {

            const res = await axiosSecure.get('/courses')
            return res.data;

        }
    })



    const HandleAccept = (id, course) => {

        Swal.fire({
            title: "Are you sure to accept?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add course!"
        }).then((result) => {
            if (result.isConfirmed) {

                const courseData = {
                    title: course.title,
                    name: course.name,
                    image: course.image,
                    category: course.category,
                    short_description: course.description,
                    price: course.price
                }

                axiosSecure.post('/confirmedCourse', courseData)
                    .then(res => {
                        axiosSecure.patch(`/courses/${id}`)
                            .then(result => {
                                console.log(result.data)

                                if (result.data.insertedId) {
                                    Swal.fire({
                                        title: "Success!",
                                        text: "Courses Added",
                                        icon: "success"
                                    });

                                    refetch()
                                }
                            })
                    })

            }
        });



    }

    const handleReject = (id ,title) => {

        Swal.fire({
            title: "Are you sure to reject?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.patch(`/courses/reject/${id}`)
                    .then(res => {
                        axiosSecure.delete(`/confirmedCourse/${title}`)
                            .then(result => {

                                if (res.data.modifiedCount > 0) {
                                    Swal.fire({
                                        title: "Course Rejected!",

                                        icon: "success"
                                    });

                                    refetch()
                                }
                            })
                    })

            }
        });

    }


    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Course List : {courses.length}</h1>
            <div className="divider"></div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            courses.map((course, index) =>
                                <tr>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={course?.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{course?.title}</div>
                                                <div className="text-sm opacity-50">{course?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {course?.status}

                                    </td>
                                    <td>
                                        <button
                                            disabled={course.status === 'Approved' || course.status === "Rejected"}
                                            onClick={() => HandleAccept(course._id, course)}
                                            className="btn bg-green-500 text-white rounded-3xl"
                                        >
                                            Accept
                                        </button>
                                    </td>
                                    <th>
                                        <button disabled={course.status === "Rejected"} onClick={() => handleReject(course._id , course.title)} className="btn  bg-red-600 text-white rounded-3xl ">Reject</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllClass;