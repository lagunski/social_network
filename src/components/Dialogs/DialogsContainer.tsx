import React from 'react'
import {
    dialogsPageType,
    profilePageType,
} from "../../Redux/Store";
import {addNewMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import Dialogs from "./Dialogs";


type PropsType = {

    store: Store<CombinedState<{ profilePage: profilePageType; dialogsPage: dialogsPageType; }>>;

}

function DialogsContainer(props: PropsType) {


    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body:string) => {
        props.store.dispatch(addNewMessageActionCreator(body))
    }

    return (
        <Dialogs addNewMessage={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )
}

export default DialogsContainer;