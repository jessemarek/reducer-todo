import React from 'react'

const AddItem = props => {
    const {
        inputValue,
        changeHandler,
        clearItems,
        onSubmit

    } = props

    return(
        <form onSubmit={onSubmit}>
                <label>Add to List:&nbsp;
                    <input 
                        type="text"
                        onChange={changeHandler}
                        value={inputValue} 
                    />
                    <button>Add</button>
                    <button type="button" onClick={clearItems}>Clear Completed</button>
                </label>
            </form>
    )
}

export default AddItem