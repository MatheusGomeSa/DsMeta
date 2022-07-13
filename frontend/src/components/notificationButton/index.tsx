import icon from "../../assets/img/notification-icon.svg"
import styles from './notificationButton.module.css'

export function NotificationButton() {
    return (
        <div className={styles['dsmeta-red-btn']}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}