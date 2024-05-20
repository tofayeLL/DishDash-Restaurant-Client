import useCart from "../../../hooks/useCart";


const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
    return (


        <div>

            <div className="flex items-center justify-around">
                <h1 className="text-3xl">Item: {cart.length}</h1>
                <h1 className="text-3xl">Total price: {totalPrice}</h1>
                <button className="btn btn-primary">Pay</button>

            </div>


            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                   
                                </th>
                                <th>ITEM IMAGE</th>
                                <th>ITEM NAME</th>
                                <th>PRICE</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr key={item._id}>
                                    <th>
                                      
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