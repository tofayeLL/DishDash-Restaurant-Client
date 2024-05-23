import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {

    // request interceptors for authorization every single api //
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent it stops request and do something like set token in backend
        // console.log('request stop from interceptors');
        const token = localStorage.getItem('access-token');
        console.log('from interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });


    // Add a response interceptor
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('status error from interceptors', error.response?.request?.status);
        return Promise.reject(error);
    });





    return axiosSecure;
};

export default useAxiosSecure;