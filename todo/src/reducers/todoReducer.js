export const initialState = {
    itemList: [
        {
            id: 2345678901,
            item: 'Build New App',
            completed: false
        },
        {
            id: 1234567890,
            item: 'Learn Redux',
            completed: false
        },
        {
            id: 3456789012,
            item: 'Refactor App',
            completed: false
        },
        {
            id: 4567890123,
            item: '?????',
            completed: false
        },
        {
            id: 5678901234,
            item: 'Profit',
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
            
            //Add the newItem to the list and reset the input value
            return {
                ...state, 
                itemList: [...state.itemList, action.payload],
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
