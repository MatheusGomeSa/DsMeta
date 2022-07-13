import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg'

export function Header() {
    return (
        <header>
            <div className={styles['dsmeta-logo-container']}>
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por
                    <a href="https://www.linkedin.com/in/matheus-gomes-343790212/"> @MatheusGomeSa | </a>
                    <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                </p>
            </div>
        </header>
    )
}