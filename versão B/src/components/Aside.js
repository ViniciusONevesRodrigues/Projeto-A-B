import styles from './css/Aside.module.css';

function Aside() {
    return (
        <aside className={styles.aside}>
            <h2>Steam game</h2>
            <a href='https://store.steampowered.com/app/1621690/Core_Keeper/'>Official game link</a>
        </aside>
    );
}

export default Aside;
