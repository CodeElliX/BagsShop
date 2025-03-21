import styles from './return.module.css';

const ReturnProducts = () => {

    return (
        <div className={styles.return__wrap}>
            <h1>Повернення товару</h1>
            <p>У <b>Bags Shop</b> ми прагнемо, щоб кожен покупець був задоволений своїм вибором! 😊 Але якщо товар вам не підійшов або має дефекти, ви можете його повернути відповідно до умов, зазначених нижче.</p>
            <h2>📅 Термін повернення</h2>
            <ul className={styles.return__num}>
                <li>🔹 Ви можете повернути товар протягом 14 днів з моменту отримання замовлення.</li>
                <li>🔹 Товар повинен бути новим, без слідів використання, збереженим у оригінальному пакуванні та з усіма бирками та етикетками.</li>
            </ul>
            <h2>❌ Які товари не підлягають поверненню?</h2>
            <p>Відповідно до законодавства України, не підлягають поверненню:</p>
            <ul className={styles.return__num}>
                <li>✔️ Товари індивідуального використання (якщо вони були у вжитку).</li>
                <li>✔️ Товари, які мають механічні пошкодження після покупки.</li>
            </ul>
            <h2>🔄 Як оформити повернення?</h2>
            <ul className={styles.return__num}>
                <li>1️⃣ Зв’яжіться з нами за телефоном 📞 або напишіть на 📩 e-mail.</li>
                <li>2️⃣ Вкажіть номер замовлення та причину повернення.</li>
                <li>3️⃣ Надішліть товар за узгодженою адресою поштовою службою (за рахунок покупця).</li>
                <li>4️⃣ Після отримання товару ми перевіримо його стан та повернемо вам кошти протягом 3-7 робочих днів.</li>
            </ul>
            <h2>💰 Повернення коштів</h2>
            <ul className={styles.return__num}>
                <li>✔️ Гроші повертаються тим самим способом, яким здійснювалась оплата (на банківську картку або готівкою у разі оплати при отриманні).</li>
                <li>✔️ Витрати на доставку не компенсуються.</li>
            </ul>
            <h4>Якщо у вас залишилися питання – ми завжди раді допомогти! 💬</h4>
            <h4>З любов’ю, Bags Shop 💼🎒👜</h4>
        </div>
    )
}

export default ReturnProducts;