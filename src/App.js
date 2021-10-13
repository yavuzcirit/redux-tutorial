import React from "react";
import CakeContainer from "./components/CakeContainer";
import {Provider} from 'react-redux'
import store from './redux/store'
import HookCakeContainer from './components/HookCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'


const App=()=> {
    return ( 
        <Provider store={store}>
        <div className = "ui container" >
            

            // <ItemContainer cake/>
            // <ItemContainer iceCream/>

            // <HookCakeContainer/>
            // <IceCreamContainer/>
        </div>
        </Provider>
    );
}

export default App;