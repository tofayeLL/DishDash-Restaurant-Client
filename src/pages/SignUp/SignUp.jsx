import { Helmet } from 'react-helmet-async';
import image from '../../assets/others/authentication1.png';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';





const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useAuth();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoURL);
                // console.log('user profile update successfully');

                // create user info save in database
                const userInfo = {
                    name: data.name,
                    email: data.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(data => {
                        console.log(data.data);
                        if (data.data.insertedId) {
                            console.log('user info saved database ')
                            Swal.fire({
                                title: "SignUp Successfully",
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
                            reset();
                            navigate('/login')
                        }

                    })



            })
            .catch((error) => {
                console.log(error.message);
            })

    }



    return (
        <div>
            <Helmet>
                <title>DishDash | Sign up</title>
            </Helmet>


            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <div className="text-center lg:text-left flex-1">
                        <img src={image} alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 flex-1">
                        <h1 className="text-3xl font-bold p-6">Sign Up now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"   {...register("name", { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>Name field is required</span>}

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"   {...register("photoURL", { required: true })} name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                {errors.name && <span className='text-red-400'>photoURL field is required</span>}

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"    {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-400'>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"    {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/


                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className='text-red-400'>Password field is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-400'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className='text-red-400'>Password must be less 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-400'>Password must have one uppercase and one lowercase and one number,  one special characters</span>}



                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign up" />

                            </div>

                            <SocialLogin></SocialLogin>


                            <div className="text-center " >
                                <p className="font-medium mt-6 lg:text-base text-sm mr-2">Do not have an account ?  Please <Link to={'/login'} className="btn-active text-purple-600 btn-link">Login</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;