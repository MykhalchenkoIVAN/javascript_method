import styles from './Preloader.module.css'

const Preloader = (props) => {
    return <div className={`${styles.preloader} ${props.stateTheme.preloader}`} id="preloader">
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </div>
}

export default Preloader;