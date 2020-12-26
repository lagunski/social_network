import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostData} from "../../../Redux/Store";



export type PropsType = {
    posts: Array<PostData>
    messageForNewPost: string
    changeNewPost: (newText: string) => void
    addPost: () => void

}


function MyPosts(props: PropsType) {


    const postsElements = props.posts.map(p => <Post message={p.message} likeCounts={p.likeCounts}/>)

    const OnAddPost = () => {

        props.addPost()
        props.changeNewPost('')
    }

    const OnPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.changeNewPost(e.currentTarget.value)

    }

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost} onChange={OnPostChange}/>
                </div>
                <div>
                    <button onClick={OnAddPost}>Add post</button>
                    <button>remove</button>
                </div>
            </div>
            <div className={s.posts}>

                {postsElements}

            </div>
        </div>

    )
}

export default MyPosts;