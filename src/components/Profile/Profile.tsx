import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, dialogsPageType, profilePageType} from "../../Redux/Store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {CombinedState, Store} from "redux";



function Profile(props:any) {


    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />

        </div>
    )
}

export default Profile