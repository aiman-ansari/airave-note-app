export const FilterReducer = (state, action) =>{
    const initial ={
            sort:"",
            date:"",
            label:""
    }
    switch (action.type) {
        case 'SORT_BY_PRIORITY':
            return{...state, sort:action.payload}
        case 'SORT_BY_LABEL':
            return{...state, label:action.payload}
        case 'SORT_BY_DATE':
            return{...state, date:action.payload}
        case 'CLEAR_ALL':
            return initial
                   default:
            break;
    }
}