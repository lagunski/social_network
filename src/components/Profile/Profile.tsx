import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../Redux/State";

export type PropsType = {
    state: profilePageType
    addPostCallback: (addPost:string) => void
    changeNewText: (newPost:string)=>void

}

function Profile(props:PropsType) {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     addPostCallback={props.addPostCallback}
                     messageForNewPost={props.state.messageForNewPost}
                     changeNewText={props.changeNewText}/>

        </div>
    )
}

export default Profile