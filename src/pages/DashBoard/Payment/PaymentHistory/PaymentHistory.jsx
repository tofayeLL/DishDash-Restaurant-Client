import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";




const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    const { data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            // console.log(res.data);
            return res.data
        }, initialData: []

    })
    console.log(payments);

    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold">TotalPayments: {payments.length}</h1>
            </div>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr>
                                <th>
                                </th>
                                <th>Email</th>

                                <th>TRANSACTION ID</th>
                                <th>TOTAL PRICE</th>
                                <th>STATUS</th>
                                <th>PAYMENT DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((item, index) => <tr key={item._id}>
                                    <th>
                                        <p>{index + 1}</p>
                                    </th>


                                    <td>
                                        {
                                            item.email
                                        }
                                    </td>
                                    <td>{item.transactionId}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {
                                            item.status
                                        }
                                    </td>
                                    <td>
                                        {
                                            item.date.slice(0, 10)
                                        }


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

export default PaymentHistory;