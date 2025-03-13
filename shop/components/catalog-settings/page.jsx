import { SortPopup } from '../sort-popup/page';
import styles from './catalog-settings.module.css';
const CatalogSettings = ({ itemsLength }) => {
    return (
        <div className={styles.settings__wrap}>
            <div className={styles.settings__filter_btn}>
                <button>
                    <svg viewBox="0 0 24 24">
                        <g>
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 14v6l-4 2v-8L4 5V3h16v2l-6 9zM6.404 5L12 13.394 17.596 5H6.404z" fillRule="nonzero" fill="white" />
                        </g>
                    </svg>
                    <p>Фільтри</p>
                </button>
                <span className={styles.count}>Знайдено {itemsLength} товарів</span>
            </div>
            <div className={styles.settings__sort_popup}><SortPopup /></div>
        </div>
    )
}

export default CatalogSettings;