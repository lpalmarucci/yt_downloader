import React, { useMemo, useReducer, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './Home'
import UserProvider from './providers/UserProvider'

const Routes = () => {
    const [userContext, setUserContext] = useState(null);

    const userProviderValue = useMemo(() => ({ userContext, setUserContext }), [userContext, setUserContext]);

    // const reducer = (state, action) => {
    //     console.log("STATE --> ", state);
    //     console.log("ACTION --> ", action);
    // }

    // const init = (initialValue) => {
    //     const localUser = localStorage.getItem('username')
    //     if(localUser){
    //         setUserContext(localUser);
    //     }
    // }

    // const userProviderValueV2 = useReducer(reducer, "", init);

    return (

        <BrowserRouter>
            <UserProvider.Provider value={userProviderValue}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/" render={() => <div>Error 404</div>} />
                </Switch>
            </UserProvider.Provider>
        </BrowserRouter>
    )
}

export default Routes