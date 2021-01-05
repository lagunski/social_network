import {ActionsTypes} from "./Store";
import {authApi} from "../api/api";


const SET_USER_DATA = "SET_USER_DATA"

export type UserDataType = {
    userId: number | null
    login: string | null
    email: string | null
}

export type AuthPropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false

}

export type SetAuthUserDataActionType = {
    type: 'SET_USER_DATA'
    data: UserDataType
}


const authReducer = (state: AuthPropsType = initialState, action: ActionsTypes): AuthPropsType => {
    switch (action.type) {

        case SET_USER_DATA: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state
    }
}


export const setAuthUserData = (userId: number | null, login: string | null, email: string | null): SetAuthUserDataActionType => {
    return {
        type: SET_USER_DATA,
        data: {userId, login, email}

    }
}

export const getAuthUserData = ()=>{
    return (dispatch: (action: ActionsTypes) => void)=>{
        authApi.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email));
                }

            })
    }
}

export default authReducer;