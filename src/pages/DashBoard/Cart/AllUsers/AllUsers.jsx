import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaRegTrashAlt } from "react-icons/fa";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get('/users')
            return data.data;
        }



    })



    return (
        <div>
            <div>
                <h1 className="text-4xl font-semibold"> TotalUsers:{users.length} </h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-gray-300">
                        <tr>
                            <th>


                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>
                                    <p>{index + 1}</p>
                                </th>
                                <td>
                                    {
                                        user.name
                                    }
                                   
                                </td>

                                <td>
                                    {
                                        user.email
                                    }
                                </td>
                                <td>{user.price}</td>
                                <td>
                                    <button 
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
    );
};

export default AllUsers;