import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getSessionAsync } from "../../stores/actions/authActions";


const useSession = () => {
    const dispatch = useDispatch();

    // Access session state from Redux
    const {
        isLoading,
        isLoggedIn,
        user,
        token,
        roles,
        isAdmin,
        isUser,
        isCustomer,
        isModerator,
        error,
    } = useSelector((state) => state.auth);

    // Fetch session data on mount
    useEffect(() => {
        dispatch(getSessionAsync());
    }, []);

    return {
        isLoading,
        isLoggedIn,
        user,
        token,
        roles,
        isAdmin,
        isUser,
        isCustomer,
        isModerator,
        error,
    };
};

export default useSession;