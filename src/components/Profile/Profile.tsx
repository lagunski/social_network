import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, dialogsPageType, profilePageType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {CombinedState, Store} from "redux";

export type PropsType = {

    store: Store<CombinedState<{ profilePage: profilePageType; dialogsPage: dialogsPageType; }>>

}

function Profile(props:PropsType) {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>

        </div>
    )
}

export default Profile