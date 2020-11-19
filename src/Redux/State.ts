import profileReducer, {addPostActionCreator, changeNewPostActionCreator} from "./profile-reducer";
import dialogsReducer, {addNewMessageActionCreator, sendMessageActionCreator} from "./dialogs-reducer";

export type DialogItemType = {
    id: number
    name: string
}
export type MessageType = {
    message: string
    id: number
}


export type PostData = {
    id: number
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


export type ActionsTypes = ReturnType <typeof addPostActionCreator> |
    ReturnType <typeof changeNewPostActionCreator> |
    ReturnType<typeof addNewMessageActionCreator> |
    ReturnType<typeof sendMessageActionCreator>;





let store: StoreType = {
    _state: {
        profilePage: {

            posts: [
                {id: 1, message: 'Hi, how are you?', likeCounts: 15},
                {id: 2, message: 'It is my first post', likeCounts: 20}
            ],
            messageForNewPost: ""
        },
        dialogsPage: {
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


export default store;
