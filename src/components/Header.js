import React, { useState } from 'react';
import "../styles/Header.css";



function Header(props){
    let [count, setNewCount] = useState(0);
    const handlerClick = () => {
        setNewCount(count + 1);
        
    }

    return (
        <header> I am Daniil
            <button className={'some-button'} onClick={handlerClick}>
                {props.buttonName}: Counted: {count} times</button>
        </header>
    )
}

export default Header;