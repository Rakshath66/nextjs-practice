import { useRouter } from "next/router";
import { useEffect } from "react";

const useUser = () => ({user: {name: "Rakshath"}, loading: false})

function Page(){
    const router = useRouter();
    console.log(router);
    const user = useUser();

    //if user is there can change route, otherwise not.
    useEffect(() => {
       if(user.user == null){  
        router.replace("/");
       }
    }, [router, user.user]);

    return (
        <div>
            <h1>Index Page in {router.query.username}</h1>
            <button onClick={(e) => {
                router.push({
                    pathname: "/user/[username]/settings/",
                    query: {username: router.query.username},
            })}}>
            Open Settings Page
            </button>

            <button onClick={(e) => router.replace("/")}>Go to Home</button>
            <button onClick={(e) => router.reload("/")}>Reload</button>
        </div>
    )
}

export default Page;