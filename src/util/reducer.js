export const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": return {
            ...state,
            loading: true,
        }
        case "SET_HITS": return {
            ...state,
            loading: false,
            hits: action.payload.hits,
            nbPages: action.payload.nbPages,
        }
        case "HANDLE_SEARCH": return {
            ...state,
            query: action.payload,
            page: 0,
        }
        case "CHANGE_PAGE": return {
            ...state,
            page: action.payload,
        }
        case "REMOVE_STORY": return {
            ...state,
            hits: state.hits.filter((hit) => hit.objectID !== action.payload),
        };
        default:
            throw new Error(`No Matching ${action.type} action type`)
    }
}