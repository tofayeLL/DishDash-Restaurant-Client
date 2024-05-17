import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');

   
    return (
        <div>
            <Helmet>
                <title>DishDash | Menu</title>
            </Helmet>

            {/* header cover image */}
            <div>
                <Cover
                    img={img}
                    title={"OUR MENU"}

                ></Cover>
            </div>

           {/* our offered section */}
           <section className="my-16">
             {/* offer section title */}
           <div className="">
           
            <SectionTitle
            subheading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
            ></SectionTitle>
           </div>
            {/* offered item display */}
           <MenuCategory items={offered}></MenuCategory>

           </section>
           

           {/* dessert */}
           <MenuCategory
           items={dessert}
           title={"DESSERTS"}
           img={dessertImg}
           ></MenuCategory>

           {/* pizza */}
           <MenuCategory
           items={pizza}
           title={"PIZZA"}
           img={pizzaImg}
           ></MenuCategory>
           {/* salad */}
           <MenuCategory
           items={salad}
           title={"SALADS"}
           img={saladImg}
           ></MenuCategory>
           {/* soup */}
           <MenuCategory
           items={soup}
           title={"SOUPS"}
           img={soupImg}
           ></MenuCategory>

           
              
           



        </div>
    );
};

export default Menu;