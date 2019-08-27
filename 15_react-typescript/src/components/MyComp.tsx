import * as React from 'react';
//typeguard
type MyCompProps = {
    name:'techsith' | 'interviewnest',
    isMarried: boolean,
    kids: 2 | 4,
    livedIn?: ['CA', 'AZ']
};

const MyComp = (props: MyCompProps) =>{
    return(
        <div>
            <h1>{props.name}</h1>
        </div>
    );
};



export default MyComp;