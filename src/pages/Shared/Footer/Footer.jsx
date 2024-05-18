import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div>


            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>

                    <p>DishDash<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
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
                </nav>
            </footer>






        </div>
    );
};

export default Footer;