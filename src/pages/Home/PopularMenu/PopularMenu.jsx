
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const {menu} = useMenu();

    const popularMenu = menu.filter(item => item.category === 'popular');
  
/* 
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                setMenu(popularMenu);
            })
    }, []) */
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
                    popularMenu.map(item => <MenuItem
                        item={item}
                        key={item._id}></MenuItem>)
                }

            </div>
           <div className="flex flex-col items-center pt-10">
           <button className="p-3 text-base border-b-2  btn btn-outline border-0 uppercase">View Full  Menu</button>

           </div>


        </section>
    );
};

export default PopularMenu;