import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import {ProfileType} from "../../../Redux/profile-reducer";


type ProfileInfoPropsType={
    profile: ProfileType | null
}


function ProfileInfo(props:ProfileInfoPropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <div>
                    <img src='https://challe.ng/assets/images/challenge/1/VSTRETIT%60_RASSVET_I_ZAKAT.jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                   <div> {props.profile.aboutMe} </div>
                    <div>{props.profile.fullName}</div>
                    <div>{props.profile.contacts.facebook}</div>
                    <div>{props.profile.contacts.vk}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;