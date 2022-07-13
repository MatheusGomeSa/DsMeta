import { NotificationButton } from '../notificationButton';
import styles from './SalesCard.module.css';

export function SalesCard() {
    return (
        <div className={styles["dsmeta-card"]}>
            <h2 className={styles["dsmeta-sales-title"]}>Vendas</h2>
            <div>
                <div className={styles["dsmeta-form-control-container"]}>
                    <input className={styles["dsmeta-form-control"]} type="text" />
                </div>
                <div className={styles["dsmeta-form-control-container"]}>
                    <input className={styles["dsmeta-form-control"]} type="text" />
                </div>
            </div>

            <div>
                <table className={styles["dsmeta-sales-table"]}>
                    <thead>
                        <tr>
                            <th className={styles["show992"]}>ID</th>
                            <th className={styles["show576"]}>Data</th>
                            <th>Vendedor</th>
                            <th className={styles["show992"]}>Visitas</th>
                            <th className={styles["show992"]}>Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles["show992"]}>#341</td>
                            <td className={styles["show576"]}>08/07/2022</td>
                            <td>Anakin</td>
                            <td className={styles["show992"]}>15</td>
                            <td className={styles["show992"]}>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className={styles["dsmeta-red-btn-container"]}>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles["show992"]}>#341</td>
                            <td className={styles["show576"]}>08/07/2022</td>
                            <td>Anakin</td>
                            <td className={styles["show992"]}>15</td>
                            <td className={styles["show992"]}>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className={styles["dsmeta-red-btn-container"]}>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles["show992"]}>#341</td>
                            <td className={styles["show576"]}>08/07/2022</td>
                            <td>Anakin</td>
                            <td className={styles["show992"]}>15</td>
                            <td className={styles["show992"]}>11</td>
                            <td>R$ 55300.00</td>
                            <td>
                                <div className={styles["dsmeta-red-btn-container"]}>
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}