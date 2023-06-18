import React from 'react';

const Fun1 = ({name,family,age,children}) => {
    return ( 
        <>
        <h1>{name}</h1>
        <h1>{family}</h1>
        <h1>{age}</h1>
        <h1>{children}</h1>     
        </>
     );
}
 
export default Fun1;