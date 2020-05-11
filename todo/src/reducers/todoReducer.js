export const initialState = {
    itemList: [
        {
            id: 2345678901,
            item: 'Create Initial State',
            completed: false
        },
        {
            id: 1234567890,
            item: 'Build Reducer Function',
            completed: false
        },
        {
            id: 3456789012,
            item: 'Dispatch Actions',
            completed: false
        },
        {
            id: 4567890123,
            item: 'Toggle Items Complete',
            completed: false
        },
        {
            id: 5678901234,
            item: 'Clear Completed Items',
            completed: false
        }
    ],
    inputValue: ''
}

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':
            //Store the value of the input in state
            return {
                ...state, 
                inputValue: action.payload
            }

        case 'ADD_ITEM':
            //Create a new ToDo item named from the input value
            const newItem = {
                id: Date.now(),
                item: state.inputValue,
                completed: false
            }

            //Add the newItem to the list and reset the input value
            return {
                ...state, 
                itemList: [...state.itemList, newItem],
                inputValue: ''
            }

        case 'TOGGLE_COMPLETE':
            //Toggle the completed: value of the list item that was clicked
            return {
                ...state, 
                itemList: [...state.itemList.map(item => item.id === Number(action.payload) ? { ...item, completed: !item.completed } : item)]
            }


        case 'CLEAR_COMPLETED':
            //Remove any items from the list that have a completed: true value
            return {
                ...state, 
                itemList: [...state.itemList.filter(item => !item.completed)]
            }

        default:
            return state
    }

}
