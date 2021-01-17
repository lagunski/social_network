import {ActionsTypes, PostData} from "./Store";
import {v1} from "uuid";
import {profileApi} from "../api/api";

export type ContactType = {
    facebook: string | null
    website: string | null
    vk: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}

export type PhotoType = {
    small: string
    large: string
}

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

export type SetStatusActionType = {
    type: 'SET_STATUS'
    status: string
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

export const setStatus = (status: string): SetStatusActionType => {
    return ({type: SET_STATUS, status})
}




export const getUserProfile = (userId: string) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))

            })
    }
}
export const getUserStatus = (userId: string) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileApi.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))

            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: (action: ActionsTypes) => void) => {
        profileApi.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(setStatus(status))
                }

            })
    }
}

const ADD_POST = "ADD_POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"


const initialState = {
    posts: [
        {id: v1(), message: 'Hi, how are you?', likeCounts: 15},
        {id: v1(), message: 'It is my first post', likeCounts: 20}
    ],
    messageForNewPost: "",
    profile: null,
    status: ""
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
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default profileReducer;