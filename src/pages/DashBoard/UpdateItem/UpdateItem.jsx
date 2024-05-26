
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { GiForkKnifeSpoon } from "react-icons/gi";
import useMenu from "../../../hooks/useMenu";




const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    const { refetch } = useMenu();


    const item = useLoaderData();
    // console.log(item);
    const { _id, name, category, recipe, price } = item;
    // console.log(_id, name, category, recipe, price, image);



    const { register, handleSubmit } = useForm()

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log('from update page', data);

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
            const menuData = await axiosSecure.patch(`/editMenu/${_id}`, menuItem);
            console.log(menuData.data);
            if (menuData.data.modifiedCount > 0) {
                // show success popup

                Swal.fire({
                    title: 'Success!',
                    text: `${data.name} is update the menu successfully`,
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                refetch();


            }
        }
        console.log(res.data);
    }



    return (
        <div>

            <div>
                <SectionTitle
                    subheading={'---update now---'}
                    heading={'UPDATE ITEM'}
                >

                </SectionTitle>
            </div>



            <div>

                <div className="bg-slate-200 p-8">

                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Recipe Name*</span>
                            </label>

                            <input type="text" defaultValue={name}  {...register("name", { required: true })} placeholder="Recipe name" className="input input-bordered" required />

                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {/* category */}
                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text lg:text-lg text-base font-semibold">Category*</span>
                                </label>

                                <select defaultValue={category} {...register("category", { required: true })}
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

                                <input type="text" defaultValue={price}  {...register("price", { required: true })} placeholder="Price" className="input input-bordered" required />

                            </div>



                        </div>



                        <div className="form-control">

                            <label className="label">
                                <span className="label-text lg:text-lg text-base font-semibold">Recipe Details*</span>
                            </label>

                            <textarea defaultValue={recipe} {...register("recipe", { required: true })} placeholder="Recipe Details" className="textarea textarea-bordered textarea-lg w-full d" required >
                            </textarea>

                        </div>

                        <div className="mt-4">
                            <input type="file"  {...register("image", { required: true })} className="file-input w-full max-w-xs" />
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="btn bg-amber-400 text-lg hover:text-amber-500 ">Update Item <span> <GiForkKnifeSpoon></GiForkKnifeSpoon></span></button>
                        </div>


                    </form>

                </div>

            </div>





        </div>
    );
};

export default UpdateItem;