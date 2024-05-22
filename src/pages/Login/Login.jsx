
import { useEffect,  useState } from 'react';
import image from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    // for disable login button
    const [disable, setDisable] = useState(true);

    // from auth provider
    const { signInUser } = useAuth();
    // console.log(signInUser);


    // for useRef 
    // const captchaRef = useRef(null);
    // react simple captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    //    handle login
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn user
        signInUser(email, password)
            .then((result) => {
                console.log(result.user);
                Swal.fire({
                    title: "Login Successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, { replace: true });
            })
           

    }

    // handle captcha
    const handleValidateCaptcha = (e) => {

        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {

            setDisable(false);
        }

        else {
            setDisable(true);

        }
    }



    return (
        <div>

            <Helmet>
                <title>DishDash | Log in</title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left flex-1">
                        <img src={image} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 flex-1">
                        <h1 className="text-3xl font-bold p-6">Sign In now!</h1>
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input  onBlur={handleValidateCaptcha}  type="text"  name="captcha" placeholder="type the text above" className="input input-bordered" required />
                           
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary">Sign In</button>
                            </div>

                            <SocialLogin></SocialLogin>

                            <div className="text-center " >
                                <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/signUp'} className="btn-active text-purple-600 btn-link">Register</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;