import './ModalWindow.css'
import Highlight from 'react-highlight';
import '../../node_modules/react-highlight/node_modules/highlight.js/styles/tomorrow-night.css'
import CopyIcon from './UI/CopyIcon';
import React, { useState, useEffect } from 'react';
import CopyIconOk from './UI/CopyIconOk'





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
    console.log(defineDeviceType() === 'Desktop');
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
                <div className="modal__wrapper " onClick={closeModal}></div>
                <div className='modal__window'>
                    <button className='modal__button-cancel' onClick={closeModal}>&#215;</button>
                    <div className='modal__header'>
                        <div className='modal__title'><div className={`type__${props.class} modal__type`}>{props.class.slice(0, 1)}</div>{props.name}</div>

                    </div>
                    <div className='modal__description'>{props.description ? props.description : "Невдовзі буде доданий короткий опис"}</div>
                    <div className='modal__code'>
                        <div className='modal__code-header'>
                            {stateBtn ? <div className='modal__code-header-btn'
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
