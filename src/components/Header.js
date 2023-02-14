import "./Header.css"
import "./Item.css"

const Header = (props) => {
    const onGoHomePageLisener = () => {
        props.onGoHomePage()
    }

    return (<div className="header">
        <h1 className="header__title" onClick={onGoHomePageLisener}><span>JS</span>.Шпаргалка()</h1>
        <div className="header__notation">
            <div className="header__notation-item"><div className={`type__object header__type`}>{"o"}</div>object</div>
            <div className="header__notation-item"><div className={`type__string header__type`}>{"s"}</div>string</div>
            <div className="header__notation-item"><div className={`type__number header__type`}>{"n"}</div>number</div>
            <div className="header__notation-item"><div className={`type__nan header__type`}>{"n"}</div>NaN (not-a-number)</div>
            <div className="header__notation-item"><div className={`type__boolean header__type`}>{"b"}</div>boolean (true/false)</div>
            <div className="header__notation-item"><div className={`type__array header__type`}>{"a"}</div>array</div>
            <div className="header__notation-item"><div className={`type__date header__type`}>{"d"}</div>date</div>
            <div className="header__notation-item"><div className={`type__regular-expresion header__type`}>{"r"}</div>regular expresion</div>
            <div className="header__notation-item"><div className={`type__function header__type`}>{"f"}</div>function</div>
            <div className="header__notation-item"><div className={`type__undefined header__type`}>{"u"}</div>undefined</div>
            <div className="header__notation-item"><div className={`type__promise header__type`}>{"p"}</div>promise</div>
            <div className="header__notation-item"><div className={`type__map header__type`}>{"m"}</div>map</div>
        </div>
    </div>)
}

export default Header;