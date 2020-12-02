import {ActionsTypes, PostData} from "./Store";

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD_POST",
        postMessage: postMessage
    } as const
}

export const changeNewPostActionCreator = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const
}

const ADD_POST = "ADD_POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCounts: 15},
        {id: 2, message: 'It is my first post', likeCounts: 20}
    ],
    messageForNewPost: ""
}

type InitialState= typeof initialState

const profileReducer = (state:InitialState=initialState, action: ActionsTypes):InitialState => {

    switch (action.type) {
        case ADD_POST: {
            const newPost: PostData = {
                id: 5,
                message: action.postMessage,
                likeCounts: 0
            }
            let stateCopy = {...state}

            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.messageForNewPost = ''

            return stateCopy;
        }
        case CHANGE_NEW_TEXT: {
            let stateCopy = {...state}

            stateCopy.messageForNewPost = action.newText
            return stateCopy;
}
            default:
                return state
    }

    return state
}

export default profileReducer;