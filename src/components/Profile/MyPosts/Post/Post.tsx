import React from "react";
import s from './Post.module.css';

type PropsType = {
    message:string
    likeCounts:number
}

function Post(props:PropsType) {
    return (

        <div className={s.item}>
            <img src={'https://pickaface.net/gallery/avatar/unr_avatarka_170523_2232_2pzbwox.png'}/>
            {props.message}
            <div>
            <span>likes: </span> {props.likeCounts}
            </div>

        </div>

    )
}

export default Post;