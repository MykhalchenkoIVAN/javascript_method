import SearchStyles from './Search.module.css';
import ButtonDarkLight from './UI/ButtonDarkLight';
import { useState } from 'react';
const Search = (props) => {
  const [showModal, setShowModal] = useState(false);
  const onChangeInput = (event) => {
    const input = document.querySelector('.Search_search__input__BzzQu');
    let value = event.target.value.trim().toLowerCase();
    let stateArray = [];
    const filteredElements = (arr) => {
      for (let i = 0; arr.length > i; i++) {
        const element = arr[i];
        const el = element.name.toLowerCase().includes(value);

        if (value.length > 0) {
          if (el) {
            stateArray.push(element);
            props.onFilteredMethod(stateArray);
            // remove class if input is valid
            input.classList.add(props.stateTheme.search__input);
            input.classList.remove('Search_search__input-invalid__SV2Ns');
          } else if (stateArray.length == 0 && value.length > 0) {
            // add class if input is valid
            input.classList.add('Search_search__input-invalid__SV2Ns');
            input.classList.remove(props.stateTheme.search__input);
          }
        } else {
          setTimeout(function () {
            // remove class if input is valid
            input.classList.remove('search__input-invalid');
            input.classList.add(props.stateTheme.search__input);
            props.onFilteredMethod(true);
          }, 300);
        }
      }
    };

    props.props.map((arr) => {
      if (arr.properties.length > 0) {
        filteredElements(arr.properties);
      }
      if (arr.methods.basicMethods.length > 0) {
        filteredElements(arr.methods.basicMethods);
      }
      if (arr.methods.data1.data2.length > 0) {
        filteredElements(arr.methods.data1.data2);
      }
      if (arr.methods.data2.data3.length > 0) {
        filteredElements(arr.methods.data2.data3);
      }
      if (arr.methods.data3.data4.length > 0) {
        filteredElements(arr.methods.data3.data4);
      }
      if (arr.methods.data4.data5.length > 0) {
        filteredElements(arr.methods.data4.data5);
      }
    });
  };
  return (
    <div
      className={`${SearchStyles.search__wrapper} ${props.stateTheme.search__wrapper}`}
    >
      <ButtonDarkLight
        onClick={props.ontoggleTheme}
        stateTheme={props.stateTheme}
      />
      <input
        className={`${SearchStyles.search__input} ${props.stateTheme.search__input}`}
        placeholder="Пошук"
        onChange={onChangeInput}
      ></input>
      {showModal && (
        <div className="modal">
          <p>Некоректний ввід!</p>
          <button onClick={() => setShowModal(false)}>Закрити</button>
        </div>
      )}
    </div>
  );
};

export default Search;
