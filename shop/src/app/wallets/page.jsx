"use client"
import styles from './wallets.module.css';
import Filters from '../../../components/filters/page';
// import ProductCard from '../product-card/page';

const Wallets = () => {

    return (
        <>
            <div className={styles.wallets__wrap}>
                <div className={styles.wallets__filters_section}>
                    {/* <Filters /> */}
                </div>
                <div className={styles.wallets__section}>
                    {/* <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard /> */}
                </div>
            </div>
        </>
    )
}

export default Wallets;