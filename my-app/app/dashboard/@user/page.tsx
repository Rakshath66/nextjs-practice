
const waitFor = (sec: number) => new Promise((res, req) => setTimeout(res, sec*1000))

const UserPage = async() => {
    await waitFor(6);

    return (
        <div>
            <h1>User Page</h1>
        </div>
    );
}

export default UserPage;