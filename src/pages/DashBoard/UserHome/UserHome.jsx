import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>

            <div>
                <h1 className="text-4xl font-semibold">Hi, WelcomeBack!</h1>
                <span>
                    {
                        user?.displayName ? user?.displayName : 'back'

                    }
                </span>
            </div>

        </div>
    );
};

export default UserHome;