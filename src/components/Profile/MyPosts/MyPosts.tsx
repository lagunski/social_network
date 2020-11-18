import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostData} from "../../../Redux/State";




export type PropsType = {
    posts: Array<PostData>
    messageForNewPost: string
    dispatch: (action: ActionsTypes) => void
}

function MyPosts (props: PropsType)  {


    const postsElements = props.posts.map (p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = ()=> {
        props.dispatch({type: "ADD-POST", postMessage: props.messageForNewPost})
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: ""}  )

    }


    const OnPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "CHANGE-NEW-TEXT", newText: e.currentTarget.value})

    }

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={OnPostChange}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>

                { postsElements }

            </div>
        </div>

    )
}

export default MyPosts;