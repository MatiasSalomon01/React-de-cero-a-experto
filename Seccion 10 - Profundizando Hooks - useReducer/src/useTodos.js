import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        });
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    const totalCount =  todos.length

    const pendienteCount =  todos.filter(todo => !todo.done).length

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        totalCount,
        pendienteCount
    }
}

export default useTodos