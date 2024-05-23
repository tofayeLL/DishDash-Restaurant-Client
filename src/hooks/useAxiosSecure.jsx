import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOutUser } = useAuth();


    // request interceptors for authorization every single api //
    axiosSecure.interceptors.request.use(function (config) {  
        // console.log('request stop from interceptors');
        const token = localStorage.getItem('access-token');

        // console.log('from interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        
        return Promise.reject(error);
    });


    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        const status = error.response?.request?.status;
        // console.log('status error from interceptors', status);

        // for 401 or 403 request user must be navigate to the loginpage and also logout the user
        if (status === 401 || status === 403) {

            await logOutUser();

            navigate('/login');

        }
        return Promise.reject(error);
    });





    return axiosSecure;
};

export default useAxiosSecure;