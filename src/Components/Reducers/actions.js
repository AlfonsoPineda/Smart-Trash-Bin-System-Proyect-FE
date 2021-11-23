export const addAddress = address => {
    return {
        type: 'ADD_ADDR',
        address
    }
}
export const addCont = container => {
    return {
        type: 'ADD_CONT',
        container
    }
}
export const changeId = container => {
    return {
        type: 'SET_ID',
        container
    }
}
export const changeType = container => {
    return {
        type: 'SET_TYPE',
        container
    }
}