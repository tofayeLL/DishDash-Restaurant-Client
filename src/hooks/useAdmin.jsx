import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email,
        queryFn: async () => {
            const data = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(data.data);
            return data.data?.admin;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;