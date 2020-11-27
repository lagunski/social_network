import React from "react";

import {dialogsPageType, profilePageType} from "../../../Redux/Store";
import {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {CombinedState, Store} from "redux";
import StoreContext from "../../../StoreContext";
import store from "../../../Redux/redux-store";




export type PropsType = {



}




function MyPostsContainer (props: PropsType)  {

    //let state = props.store.getState()




    return(
    <StoreContext.Consumer>
        {
        (store)=> {
            let state = store.getState()
            const addPost = ()=> {
                store.dispatch(addPostActionCreator(state.profilePage.messageForNewPost))
                store.dispatch(changeNewPostActionCreator(""))
            }
            const OnPostChange = (newText:string) => {
                store.dispatch(changeNewPostActionCreator(newText))

            }

            return <MyPosts changeNewPost={OnPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 messageForNewPost={state.profilePage.messageForNewPost}/>}
    }
    </StoreContext.Consumer>
    )

}

export default MyPostsContainer;