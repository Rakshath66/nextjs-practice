// const Dashboard = ({children}: {children: React.ReactNode}) => {
const Dashboard = (props: any) => {

    return (
        <div>
            <nav><h1>Navbar</h1></nav>
            {/* <div>{children}</div> */}
            <div>{props.children}</div>
            <div>{props.user}</div>
            <div>{props.stats}</div>
        </div>
    )
}

export default Dashboard;