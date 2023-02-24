import styles from './ButtonScrollUp.module.css'
import React, { useState } from 'react';

const ButtonScrollUp = () => {
    // state button scroll up
    const [stateBtnScrollUp, setStateBtnScrollUp] = useState(false)
    window.onscroll = function () {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            setStateBtnScrollUp(true)
        } else {
            setStateBtnScrollUp(false)
        }
    };
    const header = document.querySelector('.Header_header__VtsIr')
    const scrollTop = () => {
        header.scrollIntoView({ behavior: 'smooth' });
    }



    return <>
        {stateBtnScrollUp && <button className={styles.button} onClick={scrollTop}></button>}
    </>
}


export default ButtonScrollUp;