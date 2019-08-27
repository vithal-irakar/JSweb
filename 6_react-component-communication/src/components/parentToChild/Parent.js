import React from 'react';
import Child from './Child';
//import { removePropertiesDeep } from '@babel/types';
const Parent = (props) => {
   
     return(
         <div>
             {/* <Child {...props} /> */}
             <Child doWhatever={props.changeTheWorldEvent} title={props.title}/>
             <Child doWhatever={props.keepTheWorldSameEvent} title={props.title}/>
         </div>
     )

}


export default Parent;