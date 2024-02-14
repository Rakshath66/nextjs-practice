import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const DashboardPage = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <h1 className="font-bold text-7xl">Dashboard</h1>
                <h3>Hey {user?.given_name} {user?.family_name} - {user?.email}</h3>
            </div>

            <LogoutLink className="bg-blue-700 p-3 rounded-lg m-4">Log out</LogoutLink>
        </div>
    )

}

export default DashboardPage;