import type {NextPage} from "next";
import { preloadTodos } from "../todos/page";

const profilePage: NextPage = () => {
    preloadTodos();
    return (
        <div>
            <h1 className="text-4xl font-bold">Profile Page</h1>
        </div>
    )
}

export default profilePage;