

const MenuItem = ({ item }) => {
    // console.log(item)
    const { name, image, price, recipe } = item;
    return (
        <section >
            <div className="flex justify-center gap-4">

                <div>
                    <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px] object-cover object-center" src={image} alt="" />
                </div>



                <div >
                    <div className="flex justify-between items-center">
                        <h3 className="uppercase text-lg font-semibold">{name}--------------</h3>
                        <p className="text-amber-500 text-lg font-semibold">{price}</p>
                    </div>
                    <p className="w-[94%] ">{recipe}</p>
                   

                </div>
                



            </div>

        </section>
    );
};

export default MenuItem;