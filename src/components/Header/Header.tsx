import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

export type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

function Header(props: HeaderPropsType){
    return (
        <header className={s.header}>
            <img src='https://www.absolvent.pl/upload/employers/logo-mcdonald-s.svg' alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth?props.login
                :<NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;