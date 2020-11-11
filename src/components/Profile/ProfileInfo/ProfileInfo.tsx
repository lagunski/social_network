import React from "react";
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div>
                <div>
                    <img src='https://challe.ng/assets/images/challenge/1/VSTRETIT%60_RASSVET_I_ZAKAT.jpg'/>
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;