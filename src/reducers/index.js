const reducer = (state, action) =>{
    switch (action.type){
        case 'SET_FAVORITE':
            const exist = state.mylist.find(item => item.id === action.payload.id);
            if(exist) return {...state}
            return{
                ...state,
                mylist: [...state.mylist, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                mylist: state.mylist.filter(item => item.id !=action.payload)
            }
        case 'LOGIN_REQUEST':
            return{
                ...state,
                user:action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user:action.payload
            }
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user:action.payload
            }
        case 'GETVIDEOSOURCE_REQUEST':
            return {
                ...state,
                playing:state.trends.find(item => item.id===Number(action.payload)) || state.originals.find(item => item.id===Number(action.payload)) || []
            }
        case 'SEARCHVIDEO_REQUEST':
            if(action.payload ==='') return {...state, searchList:[]}
            const lista = state.trends.concat(state.originals)
                return {
                    ...state,
                    searchList:lista.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
                }
        default:
            return state;
    }
}
export default reducer;