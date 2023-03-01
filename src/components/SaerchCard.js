import styles from './Card.module.css';
import Item from './Item';

const SearchCard = (props) => {
  const onModalLisener = (e) => {
    props.onOpenModal(e);
  };
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{props.props.type}</h2>
      <div className={`${styles.card__content} ${props.stateTheme.card__bg}`}>
        <Item
          key={Math.random()}
          stateTheme={props.stateTheme}
          name={props.props.name}
          class={props.props.class}
          notice={props.props.notice}
          code={props.props.code}
          onModalLisener={onModalLisener}
          description={props.props.description}
        />
      </div>
    </div>
  );
};

export default SearchCard;
