import {ActionsTypes, PostData} from "./Store";
import { v1 } from "uuid";

export type AddPostActionType = {
    type: 'ADD_POST'
    postMessage: string
}
export type ChangeNewPostActionType = {
    type: 'CHANGE_NEW_TEXT'
    newText: string
}
export type SetUserProfileActionType = {
    type: 'SET_USER_PROFILE'
    profile: null
}

export const addPostActionCreator = (postMessage: string): AddPostActionType => {
    return ({type: ADD_POST, postMessage: postMessage})
}

export const changeNewPostActionCreator = (newText: string): ChangeNewPostActionType => {
    return ({type: CHANGE_NEW_TEXT, newText: newText})
}
export const setUserProfile = (profile: null): SetUserProfileActionType => {
    return ({type: SET_USER_PROFILE, profile})
}

const ADD_POST = "ADD_POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"



const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), message: 'It is my first post', likeCounts: 20}
    ],
    messageForNewPost: "",
    profile: null
}

type InitialState = typeof initialState

const profileReducer = (state: InitialState = initialState, action: ActionsTypes): InitialState => {


    switch (action.type) {
        case ADD_POST:
            const newPost: PostData = {
                id: v1(),
                message: action.postMessage,
                likeCounts: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }


        case CHANGE_NEW_TEXT:
            return {
                ...state,
                messageForNewPost: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

    return state
}

export default profileReducer;