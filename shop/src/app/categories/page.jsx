import Link from 'next/link';
import styles from './categories.module.css';

const Categories = () => {
    return (
        <div className={styles.categories}>
            <ul className={styles.category__sections}>
                <li>
                    <Link href="/all-products" className={styles.category__link}>
                        <span>
                            Усі товари
                            <svg height="48" viewBox="4 4 40 40" width="48"
                                xmlns="http://www.w3.org/2000/svg" className={styles.categories__icon}>
                                <path d="M6 6v36h36v-36h-36zm16 32h-12v-12h12v12zm0-16h-12v-12h12v12zm16 16h-12v-12h12v12zm0-16h-12v-12h12v12z" />
                                <path d="M0 0h48v48h-48z" fill="none" />
                            </svg>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/backpacks" className={styles.category__link}>
                        <span>
                            Рюкзаки
                            <svg className={styles.categories__icon} viewBox="2 2 20 20" xmlns="http://www.w3.org/2000/svg"><title /><g data-name="Layer 2" id="Layer_2"><path d="M20,13a8,8,0,0,0-4-6.92V6A4,4,0,0,0,8,6v.08A8,8,0,0,0,4,13v1H20ZM12,5a8,8,0,0,0-1.84.22,2,2,0,0,1,3.68,0A8,8,0,0,0,12,5Z" /><polygon points="4 16 4 22 20 22 20 16 15 16 15 18 13 18 13 16 4 16" /></g></svg>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/bags" className={styles.category__link}>
                        <span>
                            Сумки
                            <svg className={styles.categories__icon} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" /></svg>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href="/wallets" className={styles.category__link}>
                        <span>
                            Гаманці
                            <svg className={styles.categories__icon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title />
                                <path d="M20.5.305H3.5A3.535,3.535,0,0,0,0,3.805v13a4.5,4.5,0,0,0,3.306,4.174L14.465,23.6a2.929,2.929,0,0,0,2.487-.489A2.863,2.863,0,0,0,18,20.805l0-9.692a4.264,4.264,0,0,0-3.119-4.1L4.056,4.028a.75.75,0,1,1,.4-1.446l3.534.975.012,0H20.5a.75.75,0,1,1,0,1.5H15.265a.25.25,0,0,0-.067.491l.086.024a5.719,5.719,0,0,1,2.9,1.894.254.254,0,0,0,.194.091H20.5a.75.75,0,0,1,0,1.5H19.462a.249.249,0,0,0-.238.327,5.609,5.609,0,0,1,.281,1.731v6.942a.25.25,0,0,0,.25.25H20.5a3.5,3.5,0,0,0,3.5-3.5v-11A3.5,3.5,0,0,0,20.5.305Zm-5,15a2,2,0,1,1-2-2A2,2,0,0,1,15.5,15.305Z" />
                            </svg>
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Categories;