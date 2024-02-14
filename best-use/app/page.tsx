import Counter from "@/components/Counter";

const fetchAllTodos = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
}

const IndexPage = async () => {
  const todos = await fetchAllTodos();
  return (
    <div className="mx-8">
      <Counter />
      {
        todos.map((todo: any) => {
          <li key={todo.id}>{todo.title}</li>
        })
      }
    </div>
  )
}

export default IndexPage;