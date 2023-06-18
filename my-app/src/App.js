import React from 'react';
import Comp1 from './component/comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';

class App extends React.Component{
    render() {
        return (
            <>

            <Comp2/>
            <Comp1/>
            <Comp3/>
             </>
        );
    }
}
//export {App};
export default App;