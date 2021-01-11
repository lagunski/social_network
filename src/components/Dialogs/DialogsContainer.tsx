import {addNewMessageActionCreator, sendMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ActionsTypes} from "../../Redux/Store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        auth: state.auth
    }
}
let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        addNewMessage: (body:string) => {dispatch(addNewMessageActionCreator(body))},
        sendMessage: () => {dispatch(sendMessageActionCreator())}
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)