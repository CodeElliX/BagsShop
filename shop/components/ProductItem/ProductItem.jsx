"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import styles from './productItem.module.css';
import Slider from '../slider/page';
import { minusCount, addCount, addItem, removeItem } from '@/app/redux/cartSlice';

const ProductItem = () => {
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");
    const from = searchParams.get("from");
    const dispatch = useDispatch();


    const setClickButton = () => {
        if (product) {
            const item = {
                id: product.id,
                name: product.name,
                art: product.art,
                price: product.price,
                image: product.image
            }
            dispatch(addItem(item))
        }
    }

    useEffect(() => {
        if (productId && from) {
            async function fetchData() {
                const dataFile = from === "backpacks"
                    ? "/BagsShop/backpackData.json"
                    : from === "bags"
                        ? "/BagsShop/bagsData.json"
                        : from === "wallets"
                            ? "/BagsShop/walletsData.json"
                            : null;

                const response = await axios.get(dataFile);
                const productData = response.data.find(item => item.id === String(productId));
                setProduct(productData);
                return productData;
            }
            fetchData();
        }
    }, [productId, from]);


    if (!product) return <div>Загрузка...</div>;

    const { name, art, category, structure, compartments, availability, price, material, image } = product;
    const available = availability ? "В наявності" : "Немає в наявності";

    return (
        <div className={styles.productItem_wrap}>
            <section className={styles.productItem_section1}>
                <Slider image={image} />
            </section>
            <section className={styles.productItem_section2}>
                <h4 className={styles.productItem__tittle}>{name}</h4>
                <p>Артикул: {art}</p>
                <span className={styles.productItem__availability_status}>{available}</span>
                <span className={styles.productItem__price}>{price}грн</span>
                <button onClick={setClickButton} className={styles.productItem__add_product_button}>Додати до кошика</button>
                <div className={styles.productItem__description}>
                    <div className={styles.list_item}><span className={styles.key}>Матеіал</span><span className={styles.value}>{material}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Розмір, см</span><span className={styles.value}>38x36x7</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Вага, г</span><span className={styles.value}>316</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Об'єм, л</span><span className={styles.value}>9</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Кількість відділень</span><span className={styles.value}>{compartments}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Спинка</span><span className={styles.value}>{structure}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Група товарів</span><span className={styles.value}>{category}</span></div>
                </div>
            </section>
        </div>
    );

}
export default dynamic(() => Promise.resolve(ProductItem), { ssr: false });
