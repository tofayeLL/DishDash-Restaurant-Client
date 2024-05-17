import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item  bg-fixed ">
            <div className="bg-[linear-gradient(45deg,rgba(0,0,0,0.5),rgba(0,0,0,0.7))]">

                <div className="pt-10 text-white">
                    <SectionTitle
                        subheading={"---Check it out---"}
                        heading={"FROM OUR MENU"}
                    ></SectionTitle>
                </div>


                <div className="flex justify-center  items-center gap-8 pb-16 px-40 text-white">
                    <div className="flex-1">
                        <img src={featuredImg} alt="" className="" />
                    </div>

                    <div className="flex-1 space-y-3">
                        <h4>March 20, 2024</h4>
                        <h3>WHERE CAN I GET SOME?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur</p>
                        <button className="p-3 text-base border-b-2 text-white btn btn-outline border-0 uppercase">Read More</button>
                    </div>

                </div>



            </div>

        </section>
    );
};

export default Featured;