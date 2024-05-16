import Category from "../../Category/Category";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>


            <div className="my-20">
                <Category></Category>

            </div>
        </div>


    );
};

export default Home;