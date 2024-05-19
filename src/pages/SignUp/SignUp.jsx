import { Helmet } from 'react-helmet-async';
import image from '../../assets/others/authentication1.png';
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';





const SignUp = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { createUser } = useAuth();


    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);
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