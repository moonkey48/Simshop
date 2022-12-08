import React from 'react';
import s from './header.module.css';

const Header = () => {
    return <header className={s.header}>
        <h1 className={s.logo}></h1> 
    </header>
}

export default Header;