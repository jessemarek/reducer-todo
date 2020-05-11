import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':
            return {
                ...state, inputValue: action.payload
            }
        default:
            return state
    }

}

const initialState = {
    itemList: [],
    inputValue: ''
}

const TodoList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const changeHandler = e => {
        dispatch({ type: 'CHANGE_INPUT_VALUE', payload: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch({ type: 'ADD_TODO_ITEM' })
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <label>Add to List:&nbsp;
                    <input 
                        type="text"
                        onChange={changeHandler}
                        value={state.inputValue} 
                    />
                    <button>Submit</button>
                </label>
            </form>
        </div>
    )
}

export default TodoList