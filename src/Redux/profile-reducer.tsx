import {ActionsTypes, PostData, RootStateType} from "./State";

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

const profileReducer = (state:any, action: ActionsTypes) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostData = {
                id: 5,
                message: action.postMessage,
                likeCounts: 0
            }

            state.posts.push(newPost)
            break;
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText
            break;

            default:
                return state
    }

    return state
}

export default profileReducer;