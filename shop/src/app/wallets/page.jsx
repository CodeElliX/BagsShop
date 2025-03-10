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
                <aside className={styles.aside}>
                    {pathname === "/wallets/" && <Filters from="wallets" walletsItems={items} />}
                </aside>
                <div className={styles.wallets__section}>
                    {filters.map((obj) => {
                        return (
                            <ProductCard key={obj.id} {...obj} from="wallets" />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Wallets;