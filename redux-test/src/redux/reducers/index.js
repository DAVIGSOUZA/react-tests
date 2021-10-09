import { combineReducers } from "redux"

const dataReducer = () => {
    return [
        { id: 1, name: 'exemplo 1', detail: 'lorem ipsum dolor 1' },
        { id: 2, name: 'exemplo 2', detail: 'lorem ipsum dolor 2' },
        { id: 3, name: 'exemplo 3', detail: 'lorem ipsum dolor 3' },
        { id: 4, name: 'exemplo 4', detail: 'lorem ipsum dolor 4' },
        { id: 5, name: 'exemplo 5', detail: 'lorem ipsum dolor 5' },
        { id: 6, name: 'exemplo 6', detail: 'lorem ipsum dolor 6' },
    ]
}

const selectedDataReducer = (selectedData = null, action) => {
    if (action.type === 'DATA_SELECTED') {
        return action.payload
    }
    return selectedData
}

export default combineReducers({
    data: dataReducer,
    selectedData: selectedDataReducer
})