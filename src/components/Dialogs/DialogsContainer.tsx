import React from 'react'
import {addNewMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ActionsTypes} from "../../Redux/Store";


let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        addNewMessage: (body:string) => {dispatch(addNewMessageActionCreator(body))},
        sendMessage: () => {dispatch(sendMessageActionCreator())}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;