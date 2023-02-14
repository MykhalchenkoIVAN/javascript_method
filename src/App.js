import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import SearchCard from './components/SaerchCard';
import './App.css';
import data from "./data"
import ModalWindow from "./components/ModalWindow";
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom'



function App() {


  // a function that calculates the size of cards
  const wrappertRef = useRef(null);
  const resizeElement = (element) => {
    if (!wrappertRef.current) {
      return;
    }

    const { current: wrapper } = wrappertRef;
    const rowHeight = Number.parseInt(getComputedStyle(wrapper).getPropertyValue('grid-auto-rows'));
    const rowGap = Number.parseInt(getComputedStyle(wrapper).getPropertyValue('grid-row-gap'));
    const spanValue = Math.ceil((element.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    if (spanValue) {
      element.style.gridRowEnd = `span ${spanValue}`
    }
  }

  const resizeElements = () => Array.from(wrappertRef.current.children).forEach(child => resizeElement(child))

  useEffect(() => {
    resizeElements();
  }, [resizeElements])

  // state app
  const [initialState, setInitState] = useState(data)
  const onGoHomePage = (e) => {
    setSearchValue('')
    setInitState(data)
  }
  // state modal window
  const [showModal, setShowModal] = useState(false);
  const [dataModal, setDataModal] = useState({
    name: "",
    class: "",
    description: "",
    code: "",
  })

  // state search
  const [searchValue, setSearchValue] = useState('');

  const onFilteredMethod = (e) => {
    if (e != true) {
      setSearchValue(e)
      setInitState(false)
    } else {
      setSearchValue('')
      setInitState(data)
    }
  }

  // add body no-scroll
  function addBodyClassOverflow() {
    const body = document.querySelector('.body')
    body.classList.toggle('body__no-scroll');
  }
  // open modal window
  const onOpenModal = (e) => {
    setDataModal(e)
    setShowModal(true)
    addBodyClassOverflow()
  }
  // close modal window
  const onCloseModal = () => {
    setShowModal(false)
    addBodyClassOverflow()
  }


  const portalElement = document.getElementById('overlays')
  return (
    <div className='app__wrapper'>
      <Header onGoHomePage={onGoHomePage} />
      <Search
        props={data}
        onFilteredMethod={onFilteredMethod} />
      <div className='app' ref={wrappertRef}>
        {searchValue !== '' ?
          searchValue.map(arr => (
            <SearchCard
              props={arr}
              key={Math.random()}
              onOpenModal={onOpenModal}
            />
          )) :
          initialState.map(arr => (
            <Card
              key={arr.length}
              props={arr}
              onOpenModal={onOpenModal}
            />))
        }

      </div>
      <Footer />
      {ReactDOM.createPortal(<ModalWindow
        state={showModal}
        name={dataModal.name}
        class={dataModal.class}
        code={dataModal.code}
        description={dataModal.description}
        onCloseModal={onCloseModal} />, portalElement)}
    </div>

  )
}

export default App;
