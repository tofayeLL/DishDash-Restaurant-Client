import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth();
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
            
        </div>
    );
};

export default AdminHome;