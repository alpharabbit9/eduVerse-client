import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";



const useTeacher = () => {
    const { user } = useContext(AuthContext);
    return user?.role === 'teacher';
};

export default useTeacher;
