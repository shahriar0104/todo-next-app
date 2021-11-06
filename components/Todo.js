import CreateTodo from "../components/CreateTodo";
import ShowTodo from "../components/ShowTodo";
import axios from "axios";
import {useState} from "react";
import {httpClient} from "../helper/httpClient";

const Todo = ({todoList}) => {
    const [todos, setTodos] = useState(todoList);

    const addTodoHandler = (event) => {
        axios.post('/api/todos', {
            name: event.target.name.value,
            email: event.target.email.value,
            todo: event.target.todo.value
        }).then(res => {
            console.log(res.data);
            setTodos([...todos, {
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                todo: res.data.todo
            }]);
        }).catch(err => console.log(err));
    }

    const updateTodoHandler = async (target, id) => {
        const todoList = [...todos];

        const res = await axios.put(`http://localhost:8080/api/todos/${id}`, {
            method: "PUT",
            body: {
                name: target.name,
                email: target.email,
                todo: target.todo
            }
        });

        if (!res.ok) {
            console.log(res);
            throw new Error(`Error: ${res.status}`);
        } else {
            console.log(res);
            todoList[todoList.findIndex(todo => todo.id === id)] = {
                id: res.id,
                name: res.name,
                email: res.email,
                todo: res.todo
            };
            setTodos(todoList);
        }

        // axios.put('http://localhost:3000/api/todos/' + id, {
        //     name: target.name,
        //     email: target.email,
        //     todo: target.todo
        // }).then(res => {
        //     console.log(res.data);
        //     todoList[todoList.findIndex(todo => todo.id === id)] = {
        //         id: res.data.id,
        //         name: res.data.name,
        //         email: res.data.email,
        //         todo: res.data.todo
        //     };
        //     setTodos(todoList);
        // }).catch(err => console.log(err));
    }

    const deleteTodoHandler = (id) => {
        const todoList = [...todos];
        axios.delete('/todos/' + id)
            .then(res => {
                console.log(res);
                todoList.splice(todoList.findIndex(todo => todo.id === id), 1);
                setTodos(todoList);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="min-h-screen bg-gray-200 p-4 sm:p-8">
            <CreateTodo addTodo={addTodoHandler}/>
            <div className="flex flex-wrap justify-center items-center my-4 mx-8">
                {todos.map((todo) => {
                    return <ShowTodo
                        key={todo.id} id={todo.id} name={todo.name} email={todo.email} todo={todo.todo}
                        click={() => deleteTodoHandler(todo.id)}
                        update={updateTodoHandler}/>
                })}
            </div>
        </div>
    );

}


export default Todo;
