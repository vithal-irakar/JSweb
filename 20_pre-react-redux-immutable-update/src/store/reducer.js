const initialState = {
    age : 21,
    history : []
};


const reducer = (state =initialState, action ) =>{
    const newState = {...state};

    //  if(action.type === 'AGE_UP'){
    //      newState.age++;
    //  }
    //  if(action.type === 'AGE_DOWN'){
    //     newState.age--;
    // }
     // eslint-disable-next-line default-case
     switch(action.type){
         case "AGE_UP":
            //newState.age += action.value;
            return{
                ...state,
                age : state.age + action.value,
                history: state.history.concat({id:Math.random(), age:state.age + action.value})
            }

         break;
         case "AGE_DOWN":
            return{
                ...state,
                age : state.age - action.value,
                history: state.history.concat({id:Math.random(),age:state.age - action.value})
            }
         break;
        
         case "DEL_ITEM":
            return{
                ...state,
                history:state.history.filter(el =>el.id !== action.key)
            }
            break;
     }
    return newState;

}

export default reducer;
