import styles from './contacts.module.css'

const Contacts = () => {
    return (
        <div className={styles.contacts__wrap}>
            <div className={styles.contacts__description}>
                <h1>Контакти</h1>
                <p><strong>Адреса:</strong> ул. Примірна, 1, м. Київ, Україна</p>
                <p><strong>Телефон:</strong> +38 (XXX) XXX-XX-XX</p>
                <p><strong>Email:</strong> info@company.com</p>
            </div>
            <div className={styles.contacts__map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1352.9536400518618!2d30.7276211!3d46.4834305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63196be916773%3A0xcea976f5b6000a93!2s%D0%A1%D0%BE%D0%B1%D0%BE%D1%80%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BB.%2C%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0%2C%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C%2C%2065000!5e0!3m2!1sru!2sua!4v1616553452385!5m2!1sru!2sua"
                    loading="lazy">
                </iframe>
            </div>
        </div>
    );
};

export default Contacts;
