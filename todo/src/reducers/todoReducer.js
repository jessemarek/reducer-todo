export const initialState = {
    itemList: [
        {
            id: 1234567890,
            item: 'Build Reducer Function',
            completed: false
        },
        {
            id: 2345678901,
            item: 'Create Initial State',
            completed: false
        },
        {
            id: 3456789012,
            item: 'Dispatch Actions',
            completed: false
        }
    ],
    inputValue: ''
}

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'CHANGE_INPUT_VALUE':
            return {
                ...state, inputValue: action.payload
            }

        case 'ADD_TODO_ITEM':
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

        case 'TOGGLE_ITEM_COMPLETE':


        case 'CLEAR_COMPLETED':
            return {
                ...state, itemList: [...state.itemList.filter(item => !item.completed)]
            }


        default:
            return state
    }

}
