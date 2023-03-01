import styles from './Card.module.css';
import SectionCard from './SectionCard';

const Card = (props) => {
  const idSection1 =
    props.props.id_card +
    props.props.properties.length +
    props.props.titleBlock;
  const idSection2 =
    props.props.id_card +
    props.props.methods.basicMethods.length +
    props.props.titleBlock;
  const idSection3 =
    props.props.id_card +
    props.props.methods.data1.data2.length +
    props.props.titleBlock;
  const idSection4 =
    props.props.id_card +
    props.props.methods.data2.data3.length +
    props.props.titleBlock +
    1;
  const idSection5 =
    props.props.id_card +
    props.props.methods.data3.data4.length +
    props.props.titleBlock;
  const idSection6 =
    props.props.id_card +
    props.props.methods.data4.data5.length +
    props.props.titleBlock;
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{props.props.titleBlock}</h2>
      <div className={styles.card__content}>
        {props.props.properties.length > 0 && (
          <SectionCard
            key={idSection1}
            id={idSection1}
            stateTheme={props.stateTheme}
            properties={props.props.properties}
            onOpenModal={props.onOpenModal}
            title={props.props.properties}
            showProperties={props.showProperties}
            h3={'PROPERTIES'}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}

        {props.props.methods.basicMethods.length > 0 && (
          <SectionCard
            key={idSection2}
            id={idSection2}
            stateTheme={props.stateTheme}
            properties={props.props.methods.basicMethods}
            onOpenModal={props.onOpenModal}
            showProperties={props.showProperties}
            h3={'METHOD'}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}

        {props.props.methods.data1.data2.length > 0 && (
          <SectionCard
            key={idSection3}
            id={idSection3}
            stateTheme={props.stateTheme}
            properties={props.props.methods.data1.data2}
            onOpenModal={props.onOpenModal}
            showProperties={props.showProperties}
            h3={props.props.methods.data1.data1title}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}

        {props.props.methods.data2.data3.length > 0 && (
          <SectionCard
            key={idSection4}
            id={idSection4}
            stateTheme={props.stateTheme}
            properties={props.props.methods.data2.data3}
            onOpenModal={props.onOpenModal}
            showProperties={props.showProperties}
            h3={props.props.methods.data2.data1title}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}

        {props.props.methods.data3.data4.length > 0 && (
          <SectionCard
            key={idSection5}
            id={idSection5}
            stateTheme={props.stateTheme}
            properties={props.props.methods.data3.data4}
            onOpenModal={props.onOpenModal}
            showProperties={props.showProperties}
            h3={props.props.methods.data3.data1title}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}

        {props.props.methods.data4.data5.length > 0 && (
          <SectionCard
            key={idSection6}
            id={idSection6}
            stateTheme={props.stateTheme}
            properties={props.props.methods.data4.data5}
            onOpenModal={props.onOpenModal}
            showProperties={props.showProperties}
            h3={props.props.methods.data4.data1title}
            stateShowProperties={props.stateShowProperties}
          ></SectionCard>
        )}
      </div>
    </div>
  );
};

export default Card;
