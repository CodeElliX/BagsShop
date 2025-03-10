"use client"
import styles from './allProducts.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {selectBackpackData, selectBagsData, selectWalletsData, fetchBackpacks, fetchBags, fetchWallets  } from '../redux/productsSlice';
import { selectValue, resetFilters } from "../redux/filterSlice";
import { preRenderFiltersHomePage } from "../utils/preRenderFilters";
import Filters from "../../../components/filters/page";
import ProductCard from "../product-card/page";
import { useEffect } from 'react';


const AllProducts = () => {
const backpacks = useSelector(selectBackpackData);
  const bags = useSelector(selectBagsData);
  const wallets = useSelector(selectWalletsData);
  const dispatch = useDispatch()

  const searchValue = useSelector(selectValue);
  const activeFilters = useSelector(state => state.filter);


  const itemsBackpacks = preRenderFiltersHomePage(searchValue, backpacks, activeFilters);
  const itemsBags = preRenderFiltersHomePage(searchValue, bags, activeFilters);
  const itemsWallets = preRenderFiltersHomePage(searchValue, wallets, activeFilters);

  useEffect(() => {
    dispatch(fetchBackpacks());
    dispatch(fetchBags());
    dispatch(fetchWallets());
    dispatch(resetFilters());
  }, [])
    return (
        <div className={styles.all_product__wrap}>
            <aside className={styles.aside}>
                <Filters
                    from="all-products"
                    backpacksItems={itemsBackpacks}
                    bagsItems={itemsBags}
                    walletsItems={itemsWallets}
                />
            </aside>

            <div className={styles.all_products__content}>

                {itemsBackpacks.map((obj) => {
                    return (
                        <ProductCard key={obj.id} {...obj} from="backpacks" />
                    )
                })}
                {itemsBags.map((obj) => {
                    return (
                        <ProductCard key={obj.id} {...obj} from="bags" />
                    )
                })}
                {itemsWallets.map((obj) => {
                    return (
                        <ProductCard key={obj.id} {...obj} from="wallets" />
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts;