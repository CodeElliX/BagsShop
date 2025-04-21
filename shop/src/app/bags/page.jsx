"use client"
import { useEffect } from "react";
import Filters from "../../../components/filters/page";
import styles from './bags.module.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBags, selectBagsData } from "../redux/productsSlice";
import ProductCard from "../product-card/page";
import { selectValue, resetFilters } from '../redux/filterSlice';
import { usePathname } from "next/navigation";
import { preRenderFilters } from "../utils/preRenderFilters";
import CatalogSettings from '../../../components/catalog-settings/page';
import Link from 'next/link';

const Bags = () => {
    const searchValue = useSelector(selectValue);
    const items = useSelector(selectBagsData)
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();
    const filters = preRenderFilters(searchValue, items, activeFilters);


    useEffect(() => {
        const fetchBagsThunk = dispatch(fetchBags());
        dispatch(resetFilters());
        return () => {
            fetchBagsThunk.abort();
        }
    }, [dispatch])

    return (
        <>
            <div className={styles.bags__wrap}>
                {activeFilters.visible && (
                    <aside>
                        {pathname === "/bags/" && <Filters from="bags" bagsItems={items} />}
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
                    <div className={styles.bags__section}>
                        {filters
                            .map((obj) => {
                                return (
                                    <ProductCard key={obj.id} {...obj} from="bags" />
                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bags;