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
    changeNewText: (newText: string) => void,
    addPost: (postMessage: string) => void,
    _onChange: () => void,
    subscribe: (observer: () => void) => void,
    getState: () => RootStateType
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
        }
    },
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    addPost(postMessage: string) {

        const newPost: PostData = {
            id: 5,
            message: postMessage,
            likeCounts: 0
        }


        this._state.profilePage.posts.push(newPost)
        this._onChange();
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    }
}


export default store;
