/* eslint-disable no-undef */

export const loading = () => {
    return {
        type: "LOADING"
    }
}

export const ageUpAsnc = (val) => {
   return {type:'AGE_UP', value:val };
};


export const ageUp = val => {
    // debugger;
    return dispatch => {
        dispatch(loading());
        setTimeout(() =>{
           // val++; directly increments value by 2
            dispatch(ageUpAsnc(val));
        }, 5000)
    }
}

 export const ageDown = (val) => {
    return { type:'AGE_DOWN', value:val };
  };