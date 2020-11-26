import {ActionsTypes} from "./Store";

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

const initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your It-kamasutra?'},
        {id: 3, message: 'Wow'},

    ],
    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Vlad'},
        {id: 4, name: 'Max'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Ivan'},

    ],
    newMessageBody: ""
}

type InitialState= typeof initialState


const dialogsReducer = (state:InitialState=initialState, action:ActionsTypes):InitialState => {


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