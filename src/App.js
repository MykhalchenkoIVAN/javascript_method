import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import SearchCard from './components/SaerchCard';
import ModalWindow from './components/ModalWindow';
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import json from './data.json';
import Preloader from './components/UI/Preloader';
import ButtonScrollUp from './components/UI/ButtonScrollUp';
import AppStyles from './App.module.css';
import ThemeDark from './components/Helpers/ThemeDark.module.css';
import ThemeLight from './components/Helpers/ThemeLight.module.css';

function App() {
  // state Preloader
  const [statePreloader, setStatePreloader] = useState(false);
  // Preloader function
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatePreloader(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // state Theme
  const [stateTheme, setStateTheme] = useState(ThemeDark);

  const toggleTheme = () => {
    if (stateTheme == ThemeDark) {
      setStateTheme(ThemeLight);
      localStorage.setItem('theme', 'light');
    } else {
      setStateTheme(ThemeDark);
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setStateTheme(savedTheme == 'light' ? ThemeLight : ThemeDark);
    }
  }, []);

  // state showCardProperties
  const [sectionStates, satSectionStates] = useState(true);
  const toggleCardProperties = (e) => {
    satSectionStates(!sectionStates);
  };
  // a function that calculates the size of cards
  const wrappertRef = useRef();
  const resizeElement = (element) => {
    if (!wrappertRef.current) {
      return;
    }

    const { current: wrapper } = wrappertRef;
    const rowHeight = Number.parseInt(
      getComputedStyle(wrapper).getPropertyValue('grid-auto-rows')
    );
    const rowGap = Number.parseInt(
      getComputedStyle(wrapper).getPropertyValue('grid-row-gap')
    );
    const spanValue = Math.ceil(
      (element.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
    );

    if (spanValue) {
      element.style.gridRowEnd = `span ${spanValue}`;
    }
  };
  const root = document.getElementById('root');

  const resizeElements = () =>
    Array.from(wrappertRef.current.children).forEach((child) =>
      resizeElement(child)
    );

  useEffect(() => {
    if (root.querySelector('.app__wrapper')) {
      resizeElements();
    }
  }, [resizeElements, statePreloader]);

  // state app
  const [initialState, setInitState] = useState(json);

  const onGoHomePage = (e) => {
    const input = document.querySelector('.Search_search__input__BzzQu');
    input.value = '';
    if (input.className !== '.Search_search__input__BzzQu') {
      input.classList.remove('Search_search__input-invalid__SV2Ns');
    }
    setSearchValue('');
    setInitState(json);
  };

  // state modal window
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    name: '',
    class: '',
    description: '',
    code: '',
  });

  // state search
  const [searchValue, setSearchValue] = useState('');

  const onFilteredMethod = (e) => {
    if (e != true) {
      setSearchValue(e);
      setInitState(false);
    } else {
      setSearchValue('');
      setInitState(json);
    }
  };

  // add body no-scroll
  function addBodyClassOverflow() {
    const body = document.querySelector('.body');
    body.classList.toggle('body__no-scroll');
  }
  // open modal window
  const onOpenModal = (e) => {
    setDataModal(e);
    setShowModal(true);
    addBodyClassOverflow();
  };
  // close modal window
  const onCloseModal = () => {
    setShowModal(false);
    addBodyClassOverflow();
  };

  const portalElement = document.getElementById('overlays');
  return (
    <React.Fragment>
      {statePreloader ? (
        <div
          className={`${stateTheme.app} ${AppStyles.app__wrapper} app__wrapper`}
        >
          <Header onGoHomePage={onGoHomePage} stateTheme={stateTheme} />
          <Search
            stateTheme={stateTheme}
            props={json}
            onFilteredMethod={onFilteredMethod}
            ontoggleTheme={toggleTheme}
          />

          <div className={`${AppStyles.app}`} ref={wrappertRef}>
            {searchValue !== ''
              ? searchValue.map((arr) => (
                  <SearchCard
                    stateTheme={stateTheme}
                    props={arr}
                    key={arr.lenght}
                    onOpenModal={onOpenModal}
                  />
                ))
              : initialState.map((arr) => (
                  <Card
                    initialState={initialState}
                    stateTheme={stateTheme}
                    showProperties={toggleCardProperties}
                    key={arr.id}
                    props={arr}
                    onOpenModal={onOpenModal}
                  />
                ))}
            <ButtonScrollUp />
          </div>
          <Footer stateTheme={stateTheme} />
          {ReactDOM.createPortal(
            <ModalWindow
              stateTheme={stateTheme}
              state={showModal}
              name={dataModal.name}
              class={dataModal.class}
              code={dataModal.code}
              description={dataModal.description}
              onCloseModal={onCloseModal}
            />,
            portalElement
          )}
        </div>
      ) : (
        <Preloader stateTheme={stateTheme} />
      )}
    </React.Fragment>
  );
}

export default App;
