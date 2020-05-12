import React, { useReducer } from 'react'
import { initialState, todoReducer } from '../reducers/todoReducer'

//Components
import AddItem from './AddItem'
import ListItem from './ListItem'

const TodoList = () => {

    const [state, dispatch] = useReducer(todoReducer, initialState)

    /******************** CALLBACKS ********************/
    const changeHandler = e => {
        dispatch({ type: 'CHANGE_INPUT_VALUE', payload: e.target.value })
    }

    const markComplete = e => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: e.target.id })
    }

    const clearItems = () => {
        dispatch({ type: 'CLEAR_COMPLETED' })
    }

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

            <AddItem inputValue={state.inputValue} changeHandler={changeHandler} clearItems={clearItems} onSubmit={onSubmit} />

            <p>Click an item to mark it complete!</p>

            <ol>
                {
                    //Map through itemList and create an <li> for each item
                    state.itemList.map(item => <ListItem key={item.id} data={item} markComplete={markComplete} />)
                }
            </ol>
        </div>
    )
}

export default TodoList