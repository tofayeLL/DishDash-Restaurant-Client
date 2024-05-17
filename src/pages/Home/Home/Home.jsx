import { Helmet } from "react-helmet-async";
import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import TestiMonials from "../TestiMonials/TestiMonials";


const Home = () => {
    return (
        <div>

            <Helmet>
                <title>DishDash | Home</title>
            </Helmet>


            <div >
                <Banner></Banner>
            </div>


            <div className="my-20">
                <Category></Category>

            </div>
            <div>
                <PopularMenu></PopularMenu>
            </div>
            <div className="my-20">
                <Featured></Featured>
            </div>
            <div className="my-20">
                <TestiMonials></TestiMonials>
            </div>



        </div>


    );
};

export default Home;