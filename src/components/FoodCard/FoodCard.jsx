import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const FoodCard = ({ item }) => {

    const { name, image, price, recipe } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = (food) => {
        if (user && user?.email) {
            // To send data to the client
        }
        else {
            Swal.fire({
                title: "Are you sure you want to add cart?",
                text: "please login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, please login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            });
        }
    }
    return (
        <div>


            {/* card 1 */}
            <div className="  rounded-md shadow-sm my-6 border-[1px] border-[#e0e0e2]">

                <div className=" relative" >
                    <img src={image} alt="" className="object-cover object-center  w-full rounded-t-md h-72 bg-gray-500" />
                    <p className="text-xl absolute right-4 top-4 text-red-400 font-semibold bg-black px-2 py-1 rounded-full ">$ {price}</p>
                </div>

                <div className="flex flex-col justify-between p-6 space-y-8" >
                    <div className="space-y-4" >

                        <h2 className="text-xl font-semibold tracking-wide text-violet-800 ">{name}</h2>
                        <p>{recipe}</p>


                    </div>
                    <div className="text-center">
                        <Link>
                            <button
                                onClick={() => handleAddToCart(item)}

                                className="px-4 py-3 bg-gray-200 text-base border-b-2 border-amber-400 text-amber-400 btn btn-outline border-0 uppercase ">Add To Cart</button>
                        </Link>
                    </div>
                </div>

            </div>





        </div>
    );
};

export default FoodCard;