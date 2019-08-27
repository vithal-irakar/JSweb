const initialState = {
    age : 21
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
            break;
        case "AGE_DOWN":
            newState.age -= action.value;
            break;
     }
    return newState;

}

export default reducer;
