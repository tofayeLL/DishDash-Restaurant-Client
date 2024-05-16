import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu);
            })
    }, [])
    // console.log(menu)
    return (
        <section>

            <div>
                <SectionTitle
                    subheading={"---Check it out---"}
                    heading={"FROM OUR MENU"}
                ></SectionTitle>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-20 gap-8">
                {
                    menu.map(item => <MenuItem
                    item={item}
                    key={item._id}></MenuItem> )
                }

            </div>



        </section>
    );
};

export default PopularMenu;