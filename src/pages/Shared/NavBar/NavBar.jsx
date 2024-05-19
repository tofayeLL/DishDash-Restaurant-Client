
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";




const NavBar = () => {

    const { user, logOutUser } = useAuth();



    const handleLogOutUser = (e) => {
        e.preventDefault();
        // logout user
        logOutUser()
            .then(
                console.log('logout successfully')



            )
    }



    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>OurMenu</NavLink></li>
        <li><NavLink to={'/order/salad'}>Ordered</NavLink></li>
        <li><NavLink to={'/secret'}>Secret</NavLink></li>
        <li><NavLink to={'/'}>
            <button className="flex items-center gap-1">
                <span className="text-2xl">< FaShoppingCart></FaShoppingCart></span>
                <div className="badge badge-secondary">+99</div>
            </button>
        </NavLink></li>


        {
            user ?

                <div><button onClick={handleLogOutUser} className="btn">Logout</button></div> :
                <li><NavLink to={'/login'}><button className="btn">Log in</button></NavLink></li>


        }
    </>






    return (
        <div className="">



            <div className="navbar fixed z-10  bg-opacity-20  text-white  bg-black container mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">DishDash</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            links

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>



        </div>
    );
};

export default NavBar;