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

const Backpacks = () => {

    const dispatch = useDispatch();
    const items = useSelector(selectBackpackData);
    const searchValue = useSelector(selectValue);
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();

    const filters = preRenderFilters(searchValue, items, activeFilters);


    useEffect(() => {
        dispatch(fetchBackpacks());
        dispatch(resetFilters());
    }, [dispatch])

    return (
        <>
            <div className={styles.backpacks_wrap}>
                <div>
                    {pathname === "/backpacks/" && <Filters from="backpacks" backpacksItems={items} />}
                </div>
                <div className={styles.backpacks__bags_section}>
                    {filters.map((obj) => {
                        return (
                            <ProductCard key={obj.id} {...obj} from="backpacks" />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Backpacks;