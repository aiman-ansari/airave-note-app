export const filterReducer = (state,action) =>{
    switch (action.type) {
        case "FILTER_BY_PRIORITY":
            return{...state, rating:action.payload}
            
            
    
        default:
            return state
    }
}