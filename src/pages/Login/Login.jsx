
import { useEffect, useRef, useState } from 'react';
import image from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [disable, setDisable] = useState(true);

    const captchaRef = useRef(null)

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

    }

    // handle captcha
    const handleValidateCaptcha = () => {

        const user_captcha_value = captchaRef.current.value;

        if (validateCaptcha(user_captcha_value)) {
            
            setDisable(false);
        }

        else {
            setDisable(true);

        }
    }



    return (
        <div>
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
                                <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} name="captcha" placeholder="type the text above" className="input input-bordered"  />
                                <button onClick={handleValidateCaptcha} className="btn my-3 btn-outline btn-accent btn-xs">Vlidate</button>

                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disable} className="btn btn-primary">Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;