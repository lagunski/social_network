import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostData} from "../../../Redux/State";




export type PropsType = {
    posts: Array<PostData>
    addPostCallback: (addPost:string)=>void
}

function MyPosts (props: PropsType)  {


    const postsElements = props.posts.map (p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    const addPost = ()=> {

        if(newPostElement.current){

        props.addPostCallback(newPostElement.current.value)
        newPostElement.current.value = ''
        }
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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