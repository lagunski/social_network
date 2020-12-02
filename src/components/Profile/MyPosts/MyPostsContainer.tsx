import React from "react";

import {ActionsTypes, dialogsPageType, profilePageType} from "../../../Redux/Store";
import profileReducer, {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store, {AppStateType} from "../../../Redux/redux-store";

export type PropsType = {}

/*
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

}*/

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        changeNewPost: (newText: string) => dispatch(changeNewPostActionCreator(newText)),
        addPost: () => dispatch(addPostActionCreator(''))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;