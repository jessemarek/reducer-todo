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
            const newItem = {
                id: Date.now(),
                item: state.inputValue,
                completed: false
            }
            return {
                ...state, 
                itemList: [...state.itemList, newItem],
                inputValue: ''
            }

        default:
            return state
    }

}
