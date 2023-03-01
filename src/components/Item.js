import ItemStyles from './Item.module.css';

const Item = (props) => {
  const itemHandler = (event) => {
    props.onModalLisener(props);
  };

  return (
    <div className={` ${props.stateTheme.item} ${ItemStyles.item}`}>
      <div
        className={`${ItemStyles[`type__${props.class}`]} ${
          ItemStyles.type__hover
        } ${props.stateTheme.type__hover}`}
      >
        {props.class.slice(0, 1)}
      </div>
      <div className={` ${ItemStyles.item__text}`} onClick={itemHandler}>
        {props.name}{' '}
        <span className={props.stateTheme.item__span}>{props.notice}</span>
      </div>
    </div>
  );
};

export default Item;
