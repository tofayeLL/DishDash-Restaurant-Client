import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";




const ManageItems = () => {
    const { menu, loading, refetch } = useMenu();

    // console.log(menu);

    const axiosSecure = useAxiosSecure();

    if (loading) {
        // from useMenu tan stack loading
        return <div className="flex flex-col justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }

    // handle DELETE
    const handleDeleteItem = (item) => {
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })

            .then(async (result) => {
                if (result.isConfirmed) {
                    // 
                    const res = await axiosSecure.delete(`/menu/${item._id}`);
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {

                        Swal.fire({
                            title: "Deleted!",
                            text: `${item.name} item has been deleted`,
                            icon: "success"
                        });


                        // user refetch for delete from ui instantly
                        refetch();

                    }
                }

            })

    }





    return (
        <div>

            <div>
                <SectionTitle
                    subheading={'---Hurry Up!---'}
                    heading={'MANAGE ALL ITEMS'}
                ></SectionTitle>
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
                                <th>UPDATE</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
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
                                        <Link to={`/dashboard/updateMenu/${item._id}`}>
                                            <button
                                                className="bg-amber-400 p-2 rounded-md">
                                                <span className="text-lg text-white "><FaEdit></FaEdit></span>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)}
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

export default ManageItems;