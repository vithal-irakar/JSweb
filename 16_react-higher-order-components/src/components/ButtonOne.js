import React  from 'react';
import stylesWrapper from './../HOC/stylesWrapper';
// const styles ={
//     default :
//     {
//         backgroundColor :'#737373',
//         color : '#eae8e8',
//         padding : '10px'
//     },
//     disable :{
//         backgroundColor :'#9c9c9c',
//         color : '#c7c6c6'
//     }
// }
const ButtonOne = (props) =>{
    // let _styles = {...styles.default}
    // if(props.disable){
    //     _styles = {..._styles, ...styles.disable};
    // }
    // return (
    //     <button style={_styles}>I am ButtonOne</button>
    // )

    return (
        <button style={props.styles}>I am ButtonOne</button>
    )
}

export default stylesWrapper(ButtonOne);