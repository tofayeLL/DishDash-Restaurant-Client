import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    //    tan stack query
    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const data = await axiosSecure.get('/carts')
            return data.data;
        }
        /* queryFn: async () => {
            const data = await fetchTodoById(todoId)
            return data
          }, */
    })
    return [cart]
};

export default useCart;