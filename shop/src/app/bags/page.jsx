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


const Bags = () => {
    const searchValue = useSelector(selectValue);
    const items = useSelector(selectBagsData)
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.filter);
    const pathname = usePathname();

    const filters = preRenderFilters(searchValue, items, activeFilters);


    useEffect(() => {
        dispatch(fetchBags());
        dispatch(resetFilters());
    }, [dispatch])



    return (
        <>
            <div className={styles.bags__wrap}>
                <div className={styles.bags__filters_section}>
                    {pathname === "/bags/" && <Filters from="bags" bagsItems={items} />}
                </div>
                <div className={styles.bags__section}>
                    {filters
                        .map((obj) => {
                            return (
                                <ProductCard key={obj.id} {...obj} from="bags" />
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default Bags;