import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const axiosSecure = useAxiosSecure();



    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })


            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.delete(`/carts/${id}`)

                      
                        .then(data => {
                            console.log(data.data);
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your craft has been deleted.",
                                    icon: "success"
                                });

                                // delete count update instantly in ui by use refetch
                                refetch();

                                // delete from layout
                                /* const remainingCraft = filterCrafts.filter(kraft => kraft._id !== _id);
                                setFilterCrafts(remainingCraft); */

                            }
                        })



                }
            });

    }






    return (


        <div>

            <div className="flex items-center justify-around mb-10">
                <h1 className="text-3xl">Item: {cart.length}</h1>
                <h1 className="text-3xl">Total price: {totalPrice}</h1>
                <button className="btn btn-primary">Pay</button>

            </div>


            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr>
                                <th>


                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <p>{index + 1}</p>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="img" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        {
                                            item.name
                                        }
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)}
                                            className="bg-red-800 p-2 rounded-md">
                                            <span className="text-lg text-base-200"><FaRegTrashAlt></FaRegTrashAlt></span>
                                        </button>
                                    </td>



                                </tr>)
                            }

                        </tbody>

                    </table>


                </div>



            </div>





        </div>














    );
};

export default Cart;