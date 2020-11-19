import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import store, {ActionsTypes, RootStateType, StoreType} from "./Redux/State";


export type PropsType = {

    state: RootStateType
    dispatch: (action: ActionsTypes) => void
    store: StoreType
}

function App(props: PropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path='/dialogs' render={() => <Dialogs
                    store={props.store}
                    />}/>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                              dispatch={props.dispatch} />}/>

            </div>
        </div>
    )

}

export default App;
