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

const ADD_POST = "ADD_POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"

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

export const addPostActionCreator = (postMessage: string) => {
    return {
        type: "ADD-POST",
        postMessage: postMessage
    } as const
}

export const addNewMessageActionCreator = (body: string) => {
    return {
        type: "CHANGE_NEW_MESSAGE_BODY",
        body: body
    } as const
}
export const changeNewPostActionCreator = (newText: string) => {
    return {
        type: "CHANGE_NEW_TEXT",
        newText: newText
    } as const
}

export const sendMessageActionCreator = () => {
    return {
        type: "SEND_MESSAGE",

    } as const
}

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
            newMessageBody: "eqweq"
        }
    },
    _onChange() {
        console.log("state changed")
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostData = {
                id: 5,
                message: action.postMessage,
                likeCounts: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._onChange();
        } else if (action.type === "CHANGE_NEW_TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()
        } else if (action.type === "CHANGE_NEW_MESSAGE_BODY") {
            this._state.dialogsPage.newMessageBody = action.body
            this._onChange()
        } else if (action.type === "SEND_MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._onChange()
        }
    },


    subscribe(observer) { //pattern
        this._onChange = observer
    },
    getState() {
        return this._state
    }
}


export default store;
