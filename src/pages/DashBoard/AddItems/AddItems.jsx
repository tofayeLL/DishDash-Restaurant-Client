import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiForkKnifeSpoon } from "react-icons/gi";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);

        // image upload to the image bb and then get an url then send url to the database
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(res.data);
        if (res.data.success) {
            // now send data to the server with image url
            const menuItem = {
                name: data.name,
                category: data.category,
                recipe: data.recipe,
                price: parseFloat(data.price),
                image: res.data.data.display_url
            }

            // by use axios secure post data to the data base
            const menuData = await axiosSecure.post('/menu', menuItem);
            console.log(menuData.data);
            if (menuData.data.insertedId) {
                // show success popup
                Swal.fire({
                    title: 'Success!',
                    text: `${data.name} is added in the menu successfully`,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                reset();
            }
        }
        console.log(res.data);
    }
    return (
        <div>

            <div>
                <SectionTitle
                    subheading={'----whats new?---- '}
                    heading={'ADD AN ITEM'}
                ></SectionTitle>
            </div>

            <div className="bg-slate-200 p-8">

                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Recipe Name*</span>
                        </label>

                        <input type="text"  {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered" required />

                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        {/* category */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Category*</span>
                            </label>

                            <select defaultValue={'default'} {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled value={'default'}>Choose a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </div>



                        {/* price */}
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Price*</span>
                            </label>

                            <input type="text"  {...register("price", { required: true })} placeholder="Price" className="input input-bordered" required />

                        </div>



                    </div>



                    <div className="form-control">

                        <label className="label">
                            <span className="label-text lg:text-lg text-base font-semibold">Recipe Details*</span>
                        </label>

                        <textarea {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full d" required >
                        </textarea>

                    </div>

                    <div className="mt-4">
                        <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                    </div>

                    <div className="mt-6">
                        <button className="btn bg-amber-400 text-lg hover:text-amber-500 ">Add Item <span> <GiForkKnifeSpoon></GiForkKnifeSpoon></span></button>
                    </div>


                </form>

            </div>

        </div>
    );
};

export default AddItems;