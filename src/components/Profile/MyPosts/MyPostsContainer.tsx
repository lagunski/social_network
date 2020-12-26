import {ActionsTypes} from "../../../Redux/Store";
import  {addPostActionCreator, changeNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store, {AppStateType} from "../../../Redux/redux-store";

export type PropsType = {}


const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        changeNewPost: (newText: string) => dispatch(changeNewPostActionCreator(newText)),
        addPost: () => dispatch(addPostActionCreator(store.getState().profilePage.messageForNewPost))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;