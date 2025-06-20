import axios from "axios";


const axiosSecure = axios.create({

    baseURL: 'https://edu-verse-server-site-rifat-ahmeds-projects-07d383b5.vercel.app',
})

const UseAxiosSecure = () => {
    return axiosSecure ;
};

export default UseAxiosSecure;