import { useRouter } from "next/router";

function mySettings(){
    const {query} = useRouter();
    // console.log(router);

    return <h1>Settings Page for {query.username}</h1>;
}

export default mySettings;