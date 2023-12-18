const initialState={
    counter:0
}
const reducer=(state=initialState,action)=> {
  switch (action.type) {
    case 'increase':  
        return {
            ...state,
            counter:state.counter + 1
        };
  
    default:
        state;
  }
}
export default reducer