import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import revenue from '../../../assets/icon/revenue.png';
import menuItems from '../../../assets/icon/customers.png';
import products from '../../../assets/icon/products.png';
import Orders from '../../../assets/icon/order.png';
// for recharts
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();


    // stats data load
    const { data: statistics } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            // console.log(res.data);
            return res.data;
        }, initialData: []
    })



    // charts data load
    const { data: chartData } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            // console.log(res.data);
            return res.data;
        }, initialData: []
    })



    // for bar charts

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };






    return (
        <div>

            <div>
                <h1 className="text-4xl font-semibold">Hi, WelcomeBack!</h1>
                <span>
                    {
                        user.displayName ? user?.displayName : 'Back'

                    }
                </span>

            </div>

            <div>


                <section className="p-6 my-6 bg-base-300 text-gray-100">
                    <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                        {/* revenue */}
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-amber-700 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                <img src={revenue} alt="" />

                            </div>
                            <div className="flex flex-col justify-center align-middle ">
                                <p className="text-3xl font-semibold leading-none pb-2">{statistics.revenue}</p>
                                <p className="capitalize">Revenue</p>
                            </div>
                        </div>
                        {/* menuItems */}
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-amber-700 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                <img src={menuItems} alt="" />

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none pb-2">{statistics.users}</p>
                                <p className="capitalize">Customers</p>
                            </div>
                        </div>
                        {/* products */}
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-amber-700 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                <img src={products} alt="" />

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none pb-2">{statistics.menuItems}</p>
                                <p className="capitalize">Products</p>
                            </div>
                        </div>
                        {/* Orders */}
                        <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-amber-700 text-gray-100">
                            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                <img src={Orders} alt="" />

                            </div>
                            <div className="flex flex-col justify-center align-middle">
                                <p className="text-3xl font-semibold leading-none pb-2">{statistics.orders}</p>
                                <p className="capitalize">Orders</p>
                            </div>
                        </div>

                    </div>
                </section>

            </div>

            {/* charts */}

            <div className="flex items-center gap-8">
                {/* bar charts */}
                <div>
                    <BarChart
                        width={500}
                        height={500}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>




            </div>

        </div>
    );
};

export default AdminHome;