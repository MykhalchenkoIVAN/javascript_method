import './ModalWindow.css'
import Highlight from 'react-highlight';
import "./code-react-highlight.css";





const ModalWindow = (props) => {

    const closeModal = () => {
        props.onCloseModal()
    }

    return (
        <>
            {props.state && <div className='modal'>
                <div className="modal__wrapper " onClick={closeModal}></div>
                <div className='modal__window'>
                    <div className='modal__header'>
                        <div className='modal__title'><div className={`type__${props.class} modal__type`}>{props.class.slice(0, 1)}</div>{props.name}</div>
                        <button className='modal__button-cancel' onClick={closeModal}>&#215;</button>
                    </div>
                    <div className='modal__description'>{props.description ? props.description : "Невдовзі буде доданий короткий опис"}</div>
                    <div className='modal__code'>
                        {props.code &&
                            <Highlight language="javascript">
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