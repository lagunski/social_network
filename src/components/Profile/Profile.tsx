import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../Redux/State";

export type PropsType = {
    state: profilePageType
    dispatch: (action: ActionsTypes) => void

}

function Profile(props:PropsType) {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     messageForNewPost={props.state.messageForNewPost}
                     dispatch={props.dispatch}/>

        </div>
    )
}

export default Profile