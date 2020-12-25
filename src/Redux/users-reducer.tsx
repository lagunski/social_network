import {ActionsTypes} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"

export type LocationType = {
    city: string
    country: string
}

export type UsersType = {
    id: string
    photos: string
    followed: boolean
    name: string
    location: LocationType
    status: string
}

export type UsersPagePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}

export type UnfollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}

export type SetUsersActionType = {
    type: 'SET_USERS'
    users: Array<UsersType>
}

export type SetCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type SetTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }

    return state
}

export default usersReducer;

export const followAC = (userId: string): FollowActionType => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})