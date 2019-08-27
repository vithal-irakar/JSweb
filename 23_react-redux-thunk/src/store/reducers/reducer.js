const initialState = {
    age : 21,
    loading : false 
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
            newState.age += action.value;
            newState.loading = false;
            break;
        case "AGE_DOWN":
            newState.age -= action.value;
            break;
        case "LOADING":
            newState.loading = true;
            break;
     }
    return newState;

}

export default reducer;
