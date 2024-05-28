import { FaBook, FaCalendar, FaHome, FaList, FaShoppingCart, FaUsers } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdEditCalendar, MdOutlineMail } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { GiForkKnifeSpoon } from "react-icons/gi";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    // TODO: will get admin value from database
    const [isAdmin] = useAdmin();
   



    return (
        <div className="flex  ">

            <div className="w-64 min-h-screen bg-amber-400 ">
                <ul className="menu p-4">

                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to={'/dashboard/adminHome'}><span> <FaHome></FaHome></span>Admin Home</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/addItem'}><span> <GiForkKnifeSpoon></GiForkKnifeSpoon></span>Add Item</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/manageItems'}><span> <FaList></FaList></span>Manage Items</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/bookings'}><span> <FaBook></FaBook></span>Manage Bookings</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/allUsers'}><span> <FaUsers></FaUsers> </span>All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>

                                    <NavLink to={'/dashboard/userHome'}><span> <FaHome></FaHome></span>User Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to={'/dashboard/reservation'}><span> <FaCalendar></FaCalendar></span>Reservation</NavLink>
                                </li>
                                <li>

                                    <NavLink to={'/dashboard/cart'}><span> <FaShoppingCart></FaShoppingCart></span>My Cart ({cart.length})</NavLink>
                                </li>
                                <li>

                                    <NavLink to={'/dashboard/addReview'}><span> <VscPreview></VscPreview></span>Add Review</NavLink>
                                </li>
                                <li>

                                    <NavLink to={'/dashboard/myBooking'}><span> <MdEditCalendar></MdEditCalendar></span>My Booking</NavLink>
                                </li>
                                <li>

                                    <NavLink to={'/dashboard/paymentHistory'}><span> <MdEditCalendar></MdEditCalendar></span>PaymentHistory</NavLink>
                                </li>
                            </>
                    }



                    <div className="divider "></div>



                    <li>
                        <NavLink to={'/'}><span> <FaHome></FaHome></span>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/salad'}><span> <LuMenu></LuMenu></span>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/order/contact'}><span> <MdOutlineMail></MdOutlineMail></span>Contact</NavLink>
                    </li>



                </ul>

            </div>








            <div className="flex-1  p-10 ">
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Dashboard;