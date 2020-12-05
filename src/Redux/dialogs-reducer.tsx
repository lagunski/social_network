import {ActionsTypes} from "./Store";
import { v1 } from "uuid";

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
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How is your It-kamasutra?'},
        {id: v1(), message: 'Wow'},

    ],
    dialogs: [
        {id: v1(), name: 'Roman'},
        {id: v1(), name: 'Artur'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Max'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Ivan'},

    ],
    newMessageBody: ""
}

type InitialState = typeof initialState


const dialogsReducer = (state: InitialState = initialState, action: ActionsTypes): InitialState => {



    switch (action.type) {
        case CHANGE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }

        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [
                    ...state.messages,
                    {id: v1(), message: body}]
            }

        default:
            return state
    }

    return state
}

export default dialogsReducer;