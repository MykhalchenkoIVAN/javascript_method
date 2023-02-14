import "./Item.css"


const Item = (props) => {
    const itemHandler = (event) => {
        props.onModalLisener(props)
    }

    return (<div className="item">
        <div className={`type__${props.class}`}>{props.class.slice(0, 1)}</div>
        <div className="item__text" onClick={itemHandler}>{props.name} <span className="item__span">{props.notice}</span></div>
    </div>

    )
}

export default Item;