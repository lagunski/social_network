import React from 'react';
import styles from './users.module.css';
import {UsersType} from "../../Redux/users-reducer";
import { v1 } from 'uuid';

type UsersPropsType = {
    users: Array<UsersType>,
    follow: (userId:string)=>void
    unfollow: (userId:string)=>void
    setUsers: (users:Array<UsersType>)=>void

}



const Users = (props: UsersPropsType) => {
if (props.users.length===0) {
    {
        props.setUsers([
            {
                id: v1(),
                photoUrl: 'https://pbs.twimg.com/media/D0V2-vFX4AAEQiN?format=jpg&name=medium',
                followed: false,
                fullName: 'Roman',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoUrl: 'https://pbs.twimg.com/media/D0V2-vFX4AAEQiN?format=jpg&name=medium',
                followed: true,
                fullName: 'Artur',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: v1(),
                photoUrl: 'https://pbs.twimg.com/media/D0V2-vFX4AAEQiN?format=jpg&name=medium',
                followed: false,
                fullName: 'Vlad',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }
}
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;