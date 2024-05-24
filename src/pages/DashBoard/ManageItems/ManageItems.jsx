import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";



const ManageItems = () => {
    const [menu] = useMenu();
    console.log(menu);

    // handle DELETE
    const handleDeleteItem = (item) => {
        console.log(item);
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
                                        <button 
                                            className="bg-amber-400 p-2 rounded-md">
                                            <span className="text-lg text-white "><FaEdit></FaEdit></span>
                                        </button>
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