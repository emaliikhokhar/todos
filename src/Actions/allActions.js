export const addToDo = (data) => {
    return {
        type: "ADD_TO_DO",
        payload: {
            id: new Date().getTime.toString(),
            data: data
        }
    }
}

export const deleteToDo = (id) => {
    return {
        type: "DELETE_TO_DO",
        id
    }
}

export const removeToDo = () => {
    return {
        type: "REMOVE_TO_DO"
    }
}