import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaRegTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()

    // by use tan stack query get all users info form database
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const data = await axiosSecure.get('/users')
            return data.data;
        }
    })


    // delete user Handle
    const handleDeleteUser = (user) => {
        console.log(user);
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

                    axiosSecure.delete(`/users/${user._id}`)


                        .then(data => {
                            console.log(data.data);
                            if (data.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: `${user.name} User has been deleted`,
                                    icon: "success"
                                });

                                // delete count update instantly in ui by use refetch
                                refetch();



                            }
                        })

                }
            });
    }



    // handle Make Admin
    const handleMakeAdmin = (user) => {
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to be Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,  please!"
        })




            .then((result) => {
                if (result.isConfirmed) {

                    axiosSecure.patch(`/users/admin/${user._id}`)

                        .then(data => {
                            console.log(data.data);
                            if (data.data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Admin!",
                                    text: `${user.name} is an admin now`,
                                    icon: "success"
                                });

                                // delete count update instantly in ui by use refetch
                                refetch();


                            }
                        })

                }
            });

    }



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
                                <td>
                                    {
                                        user.role === 'admin' ?
                                            "Admin"
                                            :
                                            <button onClick={() => handleMakeAdmin(user)}
                                                className="bg-amber-400 p-2 rounded-md">
                                                <span className="text-lg text-base-200"><FaUsers></FaUsers></span>
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)}
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