import React, { useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    const onSubmit = e => {
        e.preventDefault()
        
        //Create a new ToDo item named from the input value
        const newItem = {
            id: Date.now(),
            item: state.inputValue,
            completed: false
        }

        dispatch({ type: 'ADD_ITEM', payload: newItem })
    }

    return(
        <div>
            <h2>My ToDo List</h2>

            <form onSubmit={onSubmit}>
                <label>Add to List:&nbsp;
                    <input 
                        type="text"
                        onChange={e => dispatch({ type: 'CHANGE_INPUT_VALUE', payload: e.target.value })}
                        value={state.inputValue} 
                    />
                    <button>Submit</button>
                    <button type="button" onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear Completed</button>
                </label>
            </form>

            <p>Click an item to mark it complete!</p>

            <ul>
                {
                    //Map through itemList and create an <li> for each item
                    state.itemList.map(
                        item => 
                            <li 
                                key={item.id} 
                                id={item.id} 
                                className={item.completed ? 'completed' : ''}
                                onClick={e => dispatch({ type: 'TOGGLE_COMPLETE', payload: e.target.id })}
                            >
                                {item.item}
                            </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList