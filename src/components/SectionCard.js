import { useEffect, useState } from 'react';
import Item from './Item';
import styles from './SectionCard.module.css';
import React from 'react';
import BgImgUp from './UI/BgImgUp';
import BgImgDown from './UI/BgImgDown';

let arr = [];

const SectionCard = (props) => {
  const [sectionStates, setSectionStates] = useState(true);

  if (!arr.includes(props.id)) {
    arr.push(props.id);

    if (arr.length) {
      const indexArrItem = arr.forEach((item) => {
        const storedState = localStorage.getItem(item);
        if (storedState !== null && storedState == 'false') {
          setSectionStates(false);
        } else {
          setSectionStates(true);
        }
      });
    }
  }
  // state recording localstarage
  const stateRecording = (e) => {
    const currentSection = arr.findIndex(function (section) {
      return section === e.target.parentNode.id;
    });
    localStorage.setItem(arr[currentSection], sectionStates ? 'false' : 'true');
  };

  const onModalLisener = (e) => {
    props.onOpenModal(e);
  };

  const hideProperties = (e) => {
    stateRecording(e);
    setSectionStates((st) => !st);
    props.showProperties(sectionStates);
  };

  return (
    <div
      className={`${styles.properties} ${props.stateTheme.card__bg}`}
      id={props.id}
    >
      <h3
        className={`${styles.properties__title} ${props.stateTheme.properties__title}`}
        id={props.id + props.h3}
        onClick={hideProperties}
      >
        {props.h3}
        {sectionStates ? <BgImgUp /> : <BgImgDown />}
      </h3>
      {sectionStates &&
        props.properties.map((item) => (
          <Item
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
    </div>
  );
};

export default SectionCard;
