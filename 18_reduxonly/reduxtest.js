const { createStore } = require('redux'); //Allow us to create store


const initialState = {
    age:21
};

const myReducer = (state = initialState, action) => {
    const newState = {...state }; // In react we dont mutate state directly, same is true in redux 

    if(action.type === 'ADD'){
        newState.age += action.val;
    }
    if(action.type === 'SUBSTRACT'){
        newState.age -= action.val;
    }
    return newState; // Its like setState in react. Sets new state inside the store.
}
const store = createStore(myReducer);
// whenever there is change in the state it automatically runs subscribe functionality.
store.subscribe(() => {
    console.log(' state changed' + JSON.stringify(store.getState()));
})

//console.log('initial state' + JSON.stringify(store.getState()));
store.dispatch({type:'ADD', val:10}); //Action. This line dispatches an action which is type ADD. Its like a  command.
//console.log('After add' + JSON.stringify(store.getState()));
store.dispatch({type:'SUBSTRACT', val:5});
//console.log('After substract' + JSON.stringify(store.getState()));

