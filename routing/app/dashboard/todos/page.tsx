async function fetchAllTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await res.json();
}

export const preloadTodos = () => {
    void fetchAllTodos();
}

const Todos = async () => {
    const todos = await fetchAllTodos();
    return (
        <div>
            <h1 className="text-4xl font-bold">Todos</h1>
            <div className="grid grid-cols-3 gap-4">
                {todos && Array.isArray(todos) && todos.map((todo: any) => (
                    <div className="border p-5 shadow-lg rounded-lg" key={todo.id}>
                        <h3>{todo.title}</h3>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default Todos;