const initialState = {
    list: [],
    counter: 1
}

// const [list, setList] = useState([]);

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_DO":
            const {id, data} = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        data: data,
                        id: id
                    }
                ]
            }
            break;

        case "DELETE_TO_DO":
            console.log(state.list)
            const newList = state.list.filter((list) => list.id !== action.id)
            return {
                ...state,
                list: newList
            }
            break;

        case "REMOVE_TO_DO":
            return {
                ...state,
                list: []
            }
            break;
        
        default: return state
    }
}

export default todoReducer;