import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostData} from "../../../Redux/State";




export type PropsType = {
    posts: Array<PostData>
    addPostCallback: (addPost:string)=>void
    messageForNewPost: string
    changeNewText: (newText:string)=>void
}

function MyPosts (props: PropsType)  {


    const postsElements = props.posts.map (p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = ()=> {
        props.addPostCallback(props.messageForNewPost)
        props.changeNewText("")


    }



    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={(e)=>props.changeNewText(e.currentTarget.value)}/>
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