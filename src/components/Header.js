import HeaderStyles from './Header.module.css';
import ItemStyles from './Item.module.css';

const Header = (props) => {
  const onGoHomePageLisener = () => {
    props.onGoHomePage();
  };

  return (
    <div className={`${HeaderStyles.header} ${props.stateTheme.header}`}>
      <h1
        className={`${HeaderStyles.header__title} ${props.stateTheme.color__title}`}
        onClick={onGoHomePageLisener}
      >
        <span>JS</span>.Шпаргалка()
      </h1>
      <div className={HeaderStyles.header__notation}>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__object} ${HeaderStyles.header__type}`}
          >
            {'o'}
          </div>
          object
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__string} ${HeaderStyles.header__type}`}
          >
            {'s'}
          </div>
          string
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__number} ${HeaderStyles.header__type}`}
          >
            {'n'}
          </div>
          number
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__nan} ${HeaderStyles.header__type}`}
          >
            {'n'}
          </div>
          NaN (not-a-number)
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__boolean} ${HeaderStyles.header__type}`}
          >
            {'b'}
          </div>
          boolean (true/false)
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__array} ${HeaderStyles.header__type}`}
          >
            {'a'}
          </div>
          array
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__date} ${HeaderStyles.header__type}`}
          >
            {'d'}
          </div>
          date
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles['type__regular-expresion']} ${HeaderStyles.header__type}`}
          >
            {'r'}
          </div>
          regular expresion
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__function} ${HeaderStyles.header__type}`}
          >
            {'f'}
          </div>
          function
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__undefined} ${HeaderStyles.header__type}`}
          >
            {'u'}
          </div>
          undefined
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__promise} ${HeaderStyles.header__type}`}
          >
            {'p'}
          </div>
          promise
        </div>
        <div
          className={`${props.stateTheme.hnitem} ${
            HeaderStyles[`header__notation-item`]
          }`}
        >
          <div
            className={`${ItemStyles.type__map} ${HeaderStyles.header__type}`}
          >
            {'m'}
          </div>
          map
        </div>
      </div>
    </div>
  );
};

export default Header;
