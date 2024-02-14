
const waitFor = (sec: number) => new Promise((res, req) => setTimeout(res, sec*1000))

const StatsPage = async() => {
    await waitFor(12);

    return (
        <div>
            <h1>Stats Page</h1>
        </div>
    );
}

export default StatsPage;