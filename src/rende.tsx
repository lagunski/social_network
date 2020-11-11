import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {addPost, RootStateType} from "./Redux/State";


export const rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
