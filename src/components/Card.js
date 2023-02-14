import styles from './Card.module.css'
import Item from "./Item";


const Card = (props) => {

    const onModalLisener = (e) => {
        props.onOpenModal(e)
    }

    return (

        < div className={styles.card} >
            <h2 className={styles.card__title}>{props.props.titleBlock}</h2>
            <div className={styles.card__content}>

                {props.props.properties.length > 0 && <div className={styles.properties}>
                    <h3 className={styles.properties__title}>PROPERTIES</h3>
                    {props.props.properties.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            onModalLisener={onModalLisener}
                            description={item.description}
                        />
                    ))}

                </div>}
                {props.props.methods.basicMethods.length > 0 && <div className={styles.methods}>
                    <h3 className={styles.methods__title}>METHODS</h3>
                    {props.props.methods.basicMethods.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            description={item.description}
                            onModalLisener={onModalLisener}
                        />
                    ))}
                </div>}


                {props.props.methods.data1.data2.length > 0 && <div className={styles.properties}>
                    <h3 className={styles.properties__title}>{props.props.methods.data1.data1title}</h3>
                    {props.props.methods.data1.data2.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            description={item.description}
                            onModalLisener={onModalLisener}
                        />
                    ))}
                </div>}

                {props.props.methods.data2.data3.length > 0 && <div className={styles.properties}>
                    <h3 className={styles.properties__title}>{props.props.methods.data2.data1title}</h3>
                    {props.props.methods.data2.data3.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            description={item.description}
                            onModalLisener={onModalLisener}
                        />
                    ))}
                </div>}

                {props.props.methods.data3.data4.length > 0 && <div className={styles.properties}>
                    <h3 className={styles.properties__title}>{props.props.methods.data3.data1title}</h3>
                    {props.props.methods.data3.data4.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            description={item.description}
                            onModalLisener={onModalLisener}
                        />
                    ))}
                </div>}

                {props.props.methods.data4.data5.length > 0 && <div className={styles.properties}>
                    <h3 className={styles.properties__title}>{props.props.methods.data4.data1title}</h3>
                    {props.props.methods.data4.data5.map(item => (
                        < Item
                            key={item.name}
                            name={item.name}
                            class={item.class}
                            notice={item.notice}
                            code={item.code}
                            description={item.description}
                            onModalLisener={onModalLisener}
                        />
                    ))}
                </div>}
            </div>
        </div >


    )

}

export default Card;