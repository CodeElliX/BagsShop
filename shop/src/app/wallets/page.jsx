"use client"
import styles from './wallets.module.css';
import Filters from '../../../components/filters/page';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWallets, selectWalletsData } from '../redux/productsSlice';
import ProductCard from '../product-card/page';
import { selectValue, resetFilters } from '../redux/filterSlice';
import { usePathname } from 'next/navigation';
import { preRenderFilters } from '../utils/preRenderFilters';
import CatalogSettings from '../../../components/catalog-settings/page';
import Link from 'next/link';

const Wallets = () => {

    const dispatch = useDispatch();
    const pathname = usePathname();
    const searchValue = useSelector(selectValue);
    const items = useSelector(selectWalletsData);
    const activeFilters = useSelector(state => state.filter)
    const filters = preRenderFilters(searchValue, items, activeFilters);

    useEffect(() => {
        dispatch(fetchWallets());
        dispatch(resetFilters());
    }, [dispatch])

    return (
        <>
            <div className={styles.wallets__wrap}>
                {activeFilters.visible && (
                    <aside className={styles.aside}>
                        {pathname === "/wallets/" && <Filters from="wallets" walletsItems={items} />}
                    </aside>
                )}
                <div className={styles.main}>
                    <div className={styles.back_to_main}>
                        <Link href="/">
                            <svg height="48" viewBox="0 0 48 48" width="48">
                                <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z" />
                                <path d="M0-.5h48v48h-48z" fill="none" />
                            </svg>
                            <h4>На головну</h4>
                        </Link>
                    </div>
                    <CatalogSettings itemsLength={items.length} />
                    <div className={styles.wallets__section}>
                        {filters.map((obj) => {
                            return (
                                <ProductCard key={obj.id} {...obj} from="wallets" />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wallets;