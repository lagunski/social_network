import React from 'react'
import {
    dialogsPageType,
    profilePageType,
} from "../../Redux/Store";
import {addNewMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import store from "../../Redux/redux-store";


type PropsType = {



}

function DialogsContainer(props: PropsType) {




    return <StoreContext.Consumer>
        {
        (store) => {
            let state = store.getState().dialogsPage

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }

            let onNewMessageChange = (body:string) => {
                store.dispatch(addNewMessageActionCreator(body))
            }
            return <Dialogs addNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
    }
    </StoreContext.Consumer>
}

export default DialogsContainer;