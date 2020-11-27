import React from "react";

import {dialogsPageType, profilePageType} from "../../../Redux/Store";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {CombinedState, Store} from "redux";




export type PropsType = {

    store: Store<CombinedState<{ profilePage: profilePageType; dialogsPage: dialogsPageType; }>>

}




function MyPostsContainer (props: PropsType)  {

    let state = props.store.getState()


    const addPost = ()=> {
        props.store.dispatch(addPostActionCreator(state.profilePage.messageForNewPost))
        props.store.dispatch(changeNewPostActionCreator(""))
    }

    const OnPostChange = (newText:string) => {
        props.store.dispatch(changeNewPostActionCreator(newText))

    }

    return <MyPosts changeNewPost={OnPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    messageForNewPost={state.profilePage.messageForNewPost}/>

}

export default MyPostsContainer;