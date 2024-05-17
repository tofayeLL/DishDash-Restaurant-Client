import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>DishDash | Menu</title>
            </Helmet>


            <div>
                <Cover
                    img={img}
                    title={"OUR MENU"}

                ></Cover>
            </div>

            <div className="my-10">
                <PopularMenu></PopularMenu>
            </div>
            <div>
                <Cover
                    img={img}
                    title={"OUR MENU"}

                ></Cover>
            </div>

            <div className="my-10">
                <PopularMenu></PopularMenu>
            </div>
            <div>
                <Cover
                    img={img}
                    title={"OUR MENU"}

                ></Cover>
            </div>

            <div className="my-10">
                <PopularMenu></PopularMenu>
            </div>
            <div>
                <Cover
                    img={img}
                    title={"OUR MENU"}

                ></Cover>
            </div>

            <div className="my-10">
                <PopularMenu></PopularMenu>
            </div>
           



        </div>
    );
};

export default Menu;