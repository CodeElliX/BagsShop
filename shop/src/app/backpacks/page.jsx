"use client"
import styles from './backpacks.module.css';
import Filters from '../../../components/filters/page';
import ProductCard from '../product-card/page';
import { useEffect } from 'react';
import { fetchBackpacks, selectBackpackData } from '../redux/productsSlice';
import { selectValue, resetFilters } from '../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { preRenderFilters } from '../utils/preRenderFilters';
import CatalogSettings from '../../../components/catalog-settings/page';
import Link from 'next/link';


const Backpacks = () => {

    const dispatch = useDispatch();
    const items = useSelector(selectBackpackData);
    const searchValue = useSelector(selectValue);
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();
    const filters = preRenderFilters(searchValue, items, activeFilters);

    useEffect(() => {
        const fetchBackpacksThunk = dispatch(fetchBackpacks());
        dispatch(resetFilters());
        return () => {
            fetchBackpacksThunk.abort();
        }
    }, [dispatch])


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                if (activeFilters.visible) {
                    document.body.style.position = 'fixed';
                    document.body.style.top = `-${window.scrollY}px`;
                    document.body.style.width = '100%';
                } else {
                    const scrollY = document.body.style.top;
                    document.body.style.position = '';
                    document.body.style.top = '';
                    document.body.style.width = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [activeFilters.visible]);



    return (
        <>
            <div className={styles.backpacks_wrap}>
                {activeFilters.visible && (
                    <aside>
                        {pathname === "/backpacks/" && <Filters from="backpacks" backpacksItems={items} />}
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
                    <div className={styles.backpacks__bags_section}>
                        {filters.map((obj) => {
                            return (
                                <ProductCard key={obj.id} {...obj} from="backpacks" />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backpacks;