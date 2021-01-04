import {ActionsTypes} from "./Store";
import {followApi, unfollowApi, usersApi} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

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
    isFetching: boolean
    followingInProgress: Array<string>
}

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export type ToggleIsFollowingProgressActionType = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: string
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
export type ToggleIsFetchingActionType = {
    type: 'TOGGLE_IS_FETCHING',
    isFetching: boolean
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }

}

export default usersReducer;

export const follow = (userId: string): FollowActionType => ({type: FOLLOW, userId})
export const unfollow = (userId: string): UnfollowActionType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleIsFollowingProgress = (isFetching: boolean, userId: string): ToggleIsFollowingProgressActionType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch: any) => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true))

        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const unfollowThunk = (id:string) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, id))
        unfollowApi.unfollow(id)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(unfollow(id))
                    }
                    dispatch(toggleIsFollowingProgress(false, id))
                }
            );
    }
}

export const followThunk = (id:string) => {
    return (dispatch: any) => {
        dispatch(toggleIsFollowingProgress(true, id))

        followApi.follow(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleIsFollowingProgress(false, id))

            })
    }
}
