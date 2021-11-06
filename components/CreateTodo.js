import React from "react";
import TodoFormFields from "./TodoFormFields";
import CommonState from "./CommonState";

const CreateTodo = ({addTodo}) => {
    const emptyTodoState = {name: '', email: '', todo: ''};
    const {todoState, setTodoState, changeHandler} = CommonState(emptyTodoState);

    const onTrigger = (event) => {
        addTodo(event);
        event.preventDefault();
        setTodoState(emptyTodoState);
    }

    return (
        <div className="w-full sm:w-8/12 md:w-6/12 m-auto">

            <TodoFormFields title='Add a Todo' name={todoState.name} email={todoState.email} todo={todoState.todo}
                            change={changeHandler} trigger={onTrigger} isCancelPresent={false}/>

        </div>
    )
}

export default CreateTodo;
