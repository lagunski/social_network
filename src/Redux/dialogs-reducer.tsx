import {ActionsTypes, RootStateType} from "./State";

export const addNewMessageActionCreator = (body: string) => {
    return {
        type: "CHANGE_NEW_MESSAGE_BODY",
        body: body
    } as const
}


export const sendMessageActionCreator = () => {
    return {
        type: "SEND_MESSAGE",

    } as const
}

const CHANGE_NEW_MESSAGE_BODY = "CHANGE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"
const dialogsReducer = (state:any, action:ActionsTypes) => {


    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messages.push({id: 6, message: body})
            break;

            default:
            return state
    }


    return state
}

export default dialogsReducer;