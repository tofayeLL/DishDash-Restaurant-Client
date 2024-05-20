import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdEditCalendar } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex ">

            <div className="w-64 min-h-screen bg-amber-400 ">
                <ul className="menu p-4">

                    <li>

                        <NavLink to={'/dashboard/userHome'}><span> <FaHome></FaHome></span>User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/dashboard/reservation'}><span> <FaCalendar></FaCalendar></span>Reservation</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/dashboard/cart'}><span> <FaShoppingCart></FaShoppingCart></span>My Cart</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/dashboard/addReview'}><span> <VscPreview></VscPreview></span>Add Review</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/dashboard/myBooking'}><span> <MdEditCalendar></MdEditCalendar></span>My Booking</NavLink>
                    </li>



                    <div className="divider "></div>



                    <li>
                        <NavLink to={'/'}><span> <FaHome></FaHome></span>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}><span> <LuMenu></LuMenu></span>Menu</NavLink>
                    </li>





                </ul>




            </div>








            <div className="flex-1  p-10">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;