import {ActionsTypes} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

export type LocationType= {
    city: string
    country:string
}

export type UsersType = {
    id: string
    photoUrl:string
    followed: boolean
    fullName: string
    location: LocationType
    status: string
    }

export type UsersPagePropsType = {
    users: Array<UsersType>
}

const initialState = {
    users: []
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}

export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}

export type SetActionType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}


const usersReducer = (state: UsersPagePropsType = initialState, action: ActionsTypes): UsersPagePropsType => {


    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }

    return state
}

export default usersReducer;

export const followAC = (userId: string): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>): SetActionType => ({type: SET_USERS, users})