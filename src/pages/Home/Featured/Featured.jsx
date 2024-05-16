import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item py-8">
            <div>
                <SectionTitle
                subheading={"---Check it out---"}
                heading={"FROM OUR MENU"}                                  
                ></SectionTitle>
            </div>


            <div className="flex justify-center items-center gap-8 py-10 px-40 text-white">
                <div className="flex-1">
                    <img src={featuredImg} alt="" className="" />
                </div>

                <div className="flex-1 space-y-3">
                    <h4>March 20, 2024</h4>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                    <button className="p-3 border-b-2 btn btn-outline">Read More</button>
                </div>

            </div>

        </section>
    );
};

export default Featured;