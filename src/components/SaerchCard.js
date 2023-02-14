import "./SearchCard.css"
import Item from "./Item";


const SearchCard = (props) => {
    const onModalLisener = (e) => {
        props.onOpenModal(e)
    }

    return (

        < div className="search__card" >
            <h2 className="search__card-title">{props.props.type}</h2>
            <div className="search__card-content">
                <Item key={Math.random()}
                    name={props.props.name}
                    class={props.props.class}
                    notice={props.props.notice}
                    code={props.props.code}
                    onModalLisener={onModalLisener}
                    description={props.props.description} />
            </div>
        </div >


    )

}

export default SearchCard;