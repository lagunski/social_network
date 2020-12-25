import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";


function ProfileInfo(props:any) {
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
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;