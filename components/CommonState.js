import {useState} from "react";

const CommonState = (props) => {
    const [todoState, setTodoState] = useState(props);

    const changeHandler = (event) => {
        setTodoState({...todoState, [event.target.name]: event.target.value});
    }

    return {todoState, setTodoState, changeHandler};
}

export default CommonState;
