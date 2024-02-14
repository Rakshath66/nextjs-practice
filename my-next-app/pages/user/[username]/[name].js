import { useRouter } from "next/router";

function myFunction(){
    const {query} = useRouter();
    // console.log(router);

    return <h1>Index Page for {query.name} in {query.username}</h1>;
}

export default myFunction;