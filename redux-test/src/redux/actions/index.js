// action creator
export const selectData = (data) => {
    //returns a action to be dispatched
    return {
        type: 'DATA_SELECTED',
        payload: data
    }
}


