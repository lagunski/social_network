import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import {Route} from "react-router-dom";
import { dialogsPageType, profilePageType} from "./Redux/Store";
import {CombinedState, Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type PropsType = {

    store: Store<CombinedState<{ profilePage: profilePageType; dialogsPage: dialogsPageType; }>>
}

function App(props: PropsType) {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>

                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                    />}/>
                <Route path='/profile' render={() => <Profile store={props.store} />}/>

            </div>
        </div>
    )

}

export default App;
