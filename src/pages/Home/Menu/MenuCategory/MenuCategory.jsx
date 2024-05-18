
import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {
    return (
        <div>

            <div className="my-10 ">
                {
                    title && <Cover
                        img={img}

                        title={title}

                    ></Cover>
                }
            </div>


            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-8 my-16">


                {
                    items.map(item => <MenuItem
                        item={item}
                        key={item._id}></MenuItem>)
                }

            </div>
             

             <Link   to={`/order/${title}`}>
             
            <button className="p-3  text-base border-b-2 border-amber-400 text-amber-400 btn btn-outline border-0 ">Order Now</button>
             </Link>



        </div>
    );
};

export default MenuCategory;