import profileReducer, {
    addPostActionCreator, AddPostActionType,
    changeNewPostActionCreator, ChangeNewPostActionType,
    setStatus, SetStatusActionType,
    setUserProfile, SetUserProfileActionType
} from "./profile-reducer";
import dialogsReducer, {
    addNewMessageActionCreator,
    addNewMessageActionType,
    sendMessageActionCreator, sendMessageActionType
} from "./dialogs-reducer";
import {
    follow, FollowActionType,
    setCurrentPage, SetCurrentPageActionType,
    setTotalUsersCount, SetTotalUsersCountActionType,
    setUsers, SetUsersActionType,
    toggleIsFetching, ToggleIsFetchingActionType, toggleIsFollowingProgress, ToggleIsFollowingProgressActionType,
    unfollow, UnfollowActionType
} from "./users-reducer";
import { v1 } from "uuid";
import {setAuthUserData, SetAuthUserDataActionType} from "./auth-reducer";


export type DialogItemType = {
    id: string
    name: string
}
export type MessageType = {
    message: string
    id: string
}


export type PostData = {
    id: string
    message: string
    likeCounts: number
}


export type dialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogItemType>
    newMessageBody: string
}

export type profilePageType = {
    posts: Array<PostData>
    messageForNewPost: string

}

export type RootStateType = {

    dialogsPage: dialogsPageType
    profilePage: profilePageType


}

export type StoreType = {
    _state: RootStateType,
    _onChange: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = AddPostActionType |
    ChangeNewPostActionType |
    addNewMessageActionType |
    sendMessageActionType |
    FollowActionType |
    UnfollowActionType |
    SetUsersActionType |
    SetCurrentPageActionType |
    SetTotalUsersCountActionType |
    ToggleIsFetchingActionType |
    SetUserProfileActionType |
    SetAuthUserDataActionType |
    ToggleIsFollowingProgressActionType |
    SetStatusActionType





/*let store: StoreType = {
    _state: {
        profilePage: {

            posts: [
                {id: v1(), message: 'Hi, how are you?', likeCounts: 15},
                {id: v1(), message: 'It is my first post', likeCounts: 20}
            ],
            messageForNewPost: ""
        },
        dialogsPage: {
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
    },
    _onChange() {
        console.log("state changed")
    },
    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action)
        this._onChange()

    },
    subscribe(observer) { //pattern
        this._onChange = observer
    },
    getState() {
        return this._state
    }
}


export default store;*/
