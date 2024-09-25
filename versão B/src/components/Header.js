import styles from './css/Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <img src='/header.png' alt='Header' />
        </div>
    );
}

export default Header;
