import React from "react";
import s from './Header.module.css';

function Header(){
    return (
        <header className={s.header}>
            <img src='https://www.absolvent.pl/upload/employers/logo-mcdonald-s.svg' alt="logo"/>
        </header>
    )
}

export default Header;