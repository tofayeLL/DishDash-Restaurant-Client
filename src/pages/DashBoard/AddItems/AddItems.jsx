import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { GiForkKnifeSpoon } from "react-icons/gi";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
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

                            <select {...register("category", { required: true })}
                                className="select select-bordered w-full ">
                                <option disabled selected>Choose a category</option>
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