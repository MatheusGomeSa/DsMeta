import { NotificationButton } from '../notificationButton';
import styles from './SalesCard.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

export function SalesCard() {
    const min = new Date(new Date().getDay() - 365);
    const today = new Date();

    const [minDate, setMinDate] = useState<Date>(min);
    const [maxDate, setMaxDate] = useState<Date>(today);
    return (
        <div className={styles["dsmeta-card"]}>
            <h2 className={styles["dsmeta-sales-title"]}>Vendas</h2>
            <div>
                <div className={styles["dsmeta-form-control-container"]}>
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => { setMinDate(date); }}
                        className={styles["dsmeta-form-control"]}
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className={styles["dsmeta-form-control-container"]}>
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => { setMaxDate(date) }}
                        className={styles["dsmeta-form-control"]}
                        dateFormat="dd/MM/yyyy"
                    />
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