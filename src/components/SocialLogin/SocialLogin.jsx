import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";



const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { googleSignIn } = useAuth();


    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                }

                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        console.log(data.data);
                        navigate('/');
                    })

            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div>

            <div className=" w-full mx-auto" >

                <button onClick={handleGoogleLogin} className="btn w-full bg-cyan-700 text-white"><FaGoogle className="text-2xl" ></FaGoogle> <span className="text-lg">Login with Google</span></button>

            </div>

        </div>
    );
};

export default SocialLogin;