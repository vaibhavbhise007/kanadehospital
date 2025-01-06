import { useDispatch } from "react-redux";
import { logoutAsync } from "../../stores/actions/authActions";

const useLogout = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            // Trigger the API logout and state reset
            await dispatch(logoutAsync()).unwrap();
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return {handleLogout};
};

export default useLogout;
