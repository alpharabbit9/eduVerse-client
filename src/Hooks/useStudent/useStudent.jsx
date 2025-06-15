import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const useStudent = () => {
    const { user } = useContext(AuthContext);
    return user?.role === 'student';
};

export default useStudent;
