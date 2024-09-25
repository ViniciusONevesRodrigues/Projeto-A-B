import styles from './css/Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles['nav-menu']}>
                <li><a href="#home">Home</a></li>
                <li><a href="#biomas">Biomas</a></li>
                <li><a href="#itens">Itens</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
