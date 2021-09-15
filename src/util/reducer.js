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
            loading: false,
            query: action.payload,
        }
        case "CHANGE_PAGE": return {
            ...state,
            loading: false,
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