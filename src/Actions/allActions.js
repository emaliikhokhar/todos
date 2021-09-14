export const addToDo = (data) => {
    return {
        type: "ADD_TO_DO",
        payload: {
            id: Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1),
            data: data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TO_DO",
        id: id
    }
}

export const removeToDo = () => {
    return {
        type: "REMOVE_TO_DO"
    }
}