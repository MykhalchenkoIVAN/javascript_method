import Card from './components/Card';
import './App.css';
import data from "./data"
import ModalWindow from "./components/ModalWindow";
import React, { useState } from 'react';
import Header from './components/Header';

function App() {

  let initialState = data;

  const [showModal, setShowModal] = useState(false)
  const [dataModal, setDataModal] = useState({
    name: "",
    class: "",
    description: "",
    code: "",
  })

  const onOpenModal = (e) => {
    setDataModal(e)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  return (

    <div className='app__wrapper'>
      <Header />
      <div className='app'>
        {initialState.map(arr => (
          <Card
            key={Math.random()}
            props={arr}
            onOpenModal={onOpenModal}
          />))}
      </div>
      <ModalWindow
        state={showModal}
        name={dataModal.name}
        class={dataModal.class}
        code={dataModal.code}
        description={dataModal.description}
        onCloseModal={onCloseModal} /></div>

  )
}

export default App;
