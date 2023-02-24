import { useState } from 'react';
import styles from './Card.module.css'
import Item from "./Item";



const Card = (props) => {
    const [stateProperties, setStateProperties] = useState(false)
    const onModalLisener = (e) => {
        props.onOpenModal(e)
    }
    const hideProperties = (e) => {
        props.showProperties()

        const children = e.target.parentNode.children;
        const targetH3 = e.target.parentNode
        const h3 = e.target
        const divContent = h3.parentNode.parentNode
        divContent.classList.toggle(styles.helpers)
        h3.classList.toggle(styles.bg_svg)
        for (let i = 0; children.length > i; i++) {
            if (children.item(i).tagName != 'H3') {
                const item = children.item(i)
                item.classList.toggle(styles.item__hidden)
                item.classList.toggle('Item_item__j6Xn7')
                targetH3.classList.toggle(styles.add)
            }
        }

    }
    return (
        < div className={styles.card} >
            <h2 className={styles.card__title}>{props.props.titleBlock}</h2>
            <div className={styles.card__content}>

                {props.props.properties.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.properties__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>PROPERTIES</h3>
                    {props.props.properties.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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
                {props.props.methods.basicMethods.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.methods__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>METHODS</h3>
                    {props.props.methods.basicMethods.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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


                {props.props.methods.data1.data2.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.methods__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>{props.props.methods.data1.data1title}</h3>
                    {props.props.methods.data1.data2.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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

                {props.props.methods.data2.data3.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.methods__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>{props.props.methods.data2.data1title}</h3>
                    {props.props.methods.data2.data3.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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

                {props.props.methods.data3.data4.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.methods__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>{props.props.methods.data3.data1title}</h3>
                    {props.props.methods.data3.data4.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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

                {props.props.methods.data4.data5.length > 0 && <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
                    <h3 className={`${styles.methods__title} ${props.stateTheme.properties__title}`} onClick={hideProperties}>{props.props.methods.data4.data1title}</h3>
                    {props.props.methods.data4.data5.map(item => (
                        < Item
                            stateTheme={props.stateTheme}
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