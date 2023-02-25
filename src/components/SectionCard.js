import { useState } from "react";
import Item from "./Item";
import styles from './SectionCard.module.css'
import React from "react";

const SectionCard = (props) => {
    const [sectionStates, satSectionStates] = useState(true);

    const localStorageKeys = props.properties.map((item, index) => `section${index}`);
    const onModalLisener = (e) => {
        props.onOpenModal(e)
    }
    const hideProperties = (e) => {
        console.log(e.target.id);
        satSectionStates((st) => !st)
        props.showProperties(sectionStates)

        localStorage.setItem(localStorageKeys[1], sectionStates ? "true" : "false");

    }

    return (
        <div className={`${styles.properties} ${props.stateTheme.card__bg}`}>
            <h3 className={`${styles.properties__title} ${props.stateTheme.properties__title}`} id={Math.random()} onClick={hideProperties}>{props.h3} </h3>
            {sectionStates &&
                props.properties.map(item => (
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
                ))
            }
        </div>
    )
}

export default SectionCard;