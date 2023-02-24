import './ModalWindow.css'
import Highlight from 'react-highlight';
import '../../node_modules/react-highlight/node_modules/highlight.js/styles/tomorrow-night.css'
import CopyIcon from './UI/CopyIcon';
import React, { useState, useEffect } from 'react';
import CopyIconOk from './UI/CopyIconOk'

import ItemStyles from './Item.module.css'
const ModalWindow = (props) => {
    let stateModal = props.state
    const [stateBtn, setStateBtn] = useState(stateModal)
    useEffect(() => {
        setStateBtn(stateModal)
    }, [stateModal])



    // identify the device from which the user uses the site 
    function defineDeviceType() {
        const userAgent = navigator.userAgent.toLowerCase();
        const mobileKeywords = ['iphone', 'ipod', 'ipad', 'android', 'blackberry', 'windows phone'];

        for (let i = 0; i < mobileKeywords.length; i++) {
            if (userAgent.indexOf(mobileKeywords[i]) !== -1) {
                return 'Mobile device';
            }
        }

        return 'Desktop';
    }
    defineDeviceType()

    const selectCopyFunction = () => {
        const code = props.code
        setStateBtn(false)
        if (defineDeviceType() === 'Mobile device') {
            copyText(code)
        } else {
            copyCodeToClipboard(code)
        }
    }
    // copy mobile clipboard
    const copyText = (code) => {
        const input = document.createElement('textarea');
        input.value = code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    }
    // copy desctop clipboard
    const copyCodeToClipboard = (code) => {
        navigator.clipboard.writeText(code)
    }

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <>
            {props.state && <div className='modal'>
                <div className={`${props.stateTheme.modal__wrapper} modal__wrapper`} onClick={closeModal}></div>
                <div className={`${props.stateTheme.modal__window} modal__window`}>
                    <button className={`${props.stateTheme['modal__button-cancel']} modal__button-cancel`} onClick={closeModal}>&#215;</button>
                    <div className='modal__header'>
                        <div className={`${props.stateTheme.modal__title} modal__title`}><div className={`${ItemStyles[`type__${props.class}`]} modal__type`}>{props.class.slice(0, 1)}</div>{props.name}</div>

                    </div>
                    <div className={`${props.stateTheme.modal__description} modal__description`}>{props.description ? props.description : "Невдовзі буде доданий короткий опис"}</div>
                    <div className='modal__code'>
                        <div className={`${props.stateTheme['modal__code-header']} modal__code-header`}>
                            {stateBtn ? <div className={`${props.stateTheme['modal__code-header-btn']} modal__code-header-btn`}
                                onClick={selectCopyFunction}>
                                <CopyIcon />
                                <span className='modal__code-span'>Copy code</span>
                            </div> : <div className='modal__code-header-btn'><CopyIconOk /></div>}
                        </div>
                        {props.code &&
                            <Highlight className='language-javascript'>
                                {props.code}
                            </Highlight>
                        }
                    </div>
                </div>
            </div>
            }
        </>
    )

}
export default ModalWindow;
