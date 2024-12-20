import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ToastContainers() {
    return (
        <ToastContainer position="top-center" autoClose={1500} hideProgressBar
            draggable pauseOnHover={false} className="mt-12" closeOnClick pauseOnFocusLoss={false}
            toastClassName={() => `relative flex p-4 mb-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
            bodyClassName={() => 'flex items-center'}
        />
    )
}
