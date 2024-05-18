import FoodCard from "../../../components/FoodCard/FoodCard";


const OrderTab = ({item}) => {
    return (
        <div>

            <div className='grid grid-cols-3 gap-5'>
                {
                    item.map(item => <FoodCard
                        item={item}
                        key={item._id}></FoodCard>)
                }
            </div>


        </div>
    );
};

export default OrderTab;