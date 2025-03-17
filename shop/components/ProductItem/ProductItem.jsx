"use client";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from "next/navigation";
import axios from 'axios';
import styles from './productItem.module.css';
import Slider from '../slider/page';
import { addItem, removeItem } from '../../src/app/redux/cartSlice';

const ProductItem = () => {
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();
    const productId = searchParams.get("id");
    const from = searchParams.get("from");
    const dispatch = useDispatch();
    const [btnProduct, setBtnProduct] = useState(false);


    const setClickButton = () => {
        setBtnProduct(!btnProduct);
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

    const removeItemClickButton = () => {
        setBtnProduct(!btnProduct);
        if (product) {
            dispatch(removeItem({ id: product.id, art: product.art }));
        }
    };

    useEffect(() => {
        if (productId && from) {
            async function fetchData() {
                const dataFile = from === "backpacks"
                    ? "/backpackData.json"
                    : from === "bags"
                        ? "/bagsData.json"
                        : from === "wallets"
                            ? "/walletsData.json"
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

    const { name, art, category, structures, compartments, availability, price, material, image } = product;
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
                {!btnProduct
                    ? (<button onClick={setClickButton} className={styles.productItem__add_product_button}>Додати до кошика</button>)
                    : (<button onClick={removeItemClickButton} className={styles.productItem__add_product_button}>Додано в кошик &#10003;</button>)
                }
                <div className={styles.productItem__description}>
                    <div className={styles.list_item}><span className={styles.key}>Матеіал</span><span className={styles.value}>{material}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Розмір, см</span><span className={styles.value}>38x36x7</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Вага, г</span><span className={styles.value}>316</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Об'єм, л</span><span className={styles.value}>9</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Кількість відділень</span><span className={styles.value}>{compartments}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Спинка</span><span className={styles.value}>{structures}</span></div>
                    <div className={styles.list_item}><span className={styles.key}>Група товарів</span><span className={styles.value}>{category}</span></div>
                </div>
            </section>
        </div>
    );

}

export default ProductItem;
