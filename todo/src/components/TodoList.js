import React, { useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const changeHandler = e => {
        dispatch({ type: 'CHANGE_INPUT_VALUE', payload: e.target.value })
    }

    const toggleComplete = e => {
        const id = e.target.id
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
    }

    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED' })
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_ITEM' })
    }

    return(
        <div>
            <ul>
                {
                    //Map through itemList and create an <li> for each item
                    state.itemList.map(
                        item => 
                            <li 
                                key={item.id} 
                                id={item.id} 
                                className={item.completed ? 'completed' : ''}
                                onClick={toggleComplete}
                            >
                                {item.item}
                            </li>
                    )
                }
            </ul>

            <form onSubmit={onSubmit}>
                <label>Add to List:&nbsp;
                    <input 
                        type="text"
                        onChange={changeHandler}
                        value={state.inputValue} 
                    />
                    <button>Submit</button>
                    <button type="button" onClick={clearCompleted}>Clear Completed</button>
                </label>
            </form>
        </div>
    )
}

export default TodoList