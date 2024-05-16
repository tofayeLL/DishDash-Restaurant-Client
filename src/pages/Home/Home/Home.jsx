import Category from "../../Category/Category";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <div>
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
        </div>


    );
};

export default Home;