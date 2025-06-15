import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";


const useAdmin = () => {
    const { user } = useContext(AuthContext);
    return user?.role === 'admin';
};

export default useAdmin;
