import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
    return (
        <div>


            <div className="bg-[#323234] lg:mt-28 mt-8">

                <footer className="px-4 py-6 divide-y text-white">
                    <div className="container lg:px-20 md:px-14 flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  ">
                        <div className="lg:w-1/3">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start mb-3">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-base-200">
                                    <img className="p-1" src="" alt="" />
                                </div>
                                <span className="self-center text-2xl font-semibold">Eco<span className="text-purple-600">Krafts</span></span>
                            </a>
                            <div className="space-y-0 lg:block hidden">

                                <p className="flex items-center">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <FaLocationDot></FaLocationDot>
                                    </span>
                                    <span> Dhaka City, Bangladesh </span>
                                </p>
                                <p className="flex items-center">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <IoMdCall className="text-xl"></IoMdCall>
                                    </span>
                                    <span>123456789</span>
                                </p>


                                <p className="flex items-center">
                                    <span className="w-5 h-5 mr-2 sm:mr-4">
                                        <MdOutlineMailOutline className="text-xl"></MdOutlineMailOutline>
                                    </span>
                                    <span>ecokrafts@gmail.com</span>
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracking-wide uppercase font-semibold">Company</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">About us</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Agents</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Blogs</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="tracking-wide uppercase font-semibold ">Actions</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Buy properties</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Rent properties</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Sell properties</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="uppercase font-semibold">Developers</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Public API</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Guides</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3  ">
                                <div className="uppercase font-semibold">Social media</div>
                                <div className="flex justify-start space-x-3">
                                    <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                        <FaFacebook className="w-5 h-5 fill-current"></FaFacebook>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                        <FaTwitter className="w-5 h-5 fill-current"></FaTwitter>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                        <FaInstagram className="w-5 h-5 fill-current"></FaInstagram>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="py-6 text-sm text-center text-gray-400 ">
                        © EcoKrafts.   All Rights Reserved. 2024
                    </div>
                </footer>
            </div>






        </div>
    );
};

export default Footer;