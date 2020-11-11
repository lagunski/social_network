import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewText, RootStateType} from "./Redux/State";


export const rerenderEntireTree = (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPost} changeNewText={changeNewText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
