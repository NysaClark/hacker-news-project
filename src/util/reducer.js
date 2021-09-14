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
            nbpages: action.payload.nbpages,
        }
        case "HANDLE_SEARCH": return {
            ...state,
            //idk
        };
        default:
            throw new Error(`No Matching ${action.type} action type`)
    }
}