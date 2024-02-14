// "use client";

const DashBoardPage = () => {
    console.log("Hey There!");
    const sayHello = async(params: any) => {
        "use server"
        console.log(params);
    }

    return (
        <div>
            <h1>Dashboard Page</h1>
            {/* <button onClick={sayHello}>Say Hello</button> */}
            <form action={sayHello} >
                <input type="email" name="email" />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default DashBoardPage;