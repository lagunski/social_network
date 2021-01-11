import React from 'react'
import {AppStateType} from "../Redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type PropsType={
    isAuth:boolean
}

let mapStateToPropsForRedirect = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
} as PropsType)

type DispatchPropsType = {}

export function withAuthRedirect <WP> (Component: React.ComponentType<WP>)  {
    debugger

    function RedirectComponent(props: PropsType & DispatchPropsType){
        let {isAuth, ...restProps} = props
        if (!props.isAuth) return  <Redirect to='/login'/>
        return <Component {...restProps as WP}/>

    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}