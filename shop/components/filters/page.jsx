"use client"
import { usePathname } from 'next/navigation';
import styles from './filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, setFilterOpen, setVisible } from '../../src/app/redux/filterSlice';

const Filters = (props) => {
    const path = usePathname();
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.filter);

    const onClickCloseFilters = () => {
        setTimeout(() => dispatch(setVisible(false)), 300);
    };

    const dataArray = props.from === "backpacks"
        ? props.backpacksItems
        : props.from === "bags"
            ? props.bagsItems
            : props.from === "wallets"
                ? props.walletsItems
                : props.from === "all-products"
                    ? [...props.backpacksItems, ...props.bagsItems, ...props.walletsItems]
                    : [];

    const colours = [...new Set(dataArray.map((el) => el.color))];
    const series = [... new Set(dataArray.map((el) => el.series))];
    const classification = dataArray.map((el) => el.classification);
    const structures = [... new Set(dataArray.map((el) => el.structures))];
    const compartments = [...new Set(dataArray.map((el) => Number(el.compartments)))];
    const categoryes = [...new Set(dataArray.map((el) => el.category))];
    const gender = [...new Set(dataArray.map(el => el.gender))];
    const allProductsGroop = ["Рюкзаки", "Сумки", "Гаманці"];


    if (path === "/all-products/") {
        return (
            <aside className={`${styles.filter__wrap} ${!activeFilters.visible ? styles.hidden : styles.open}`}>
                <div className={styles.clouse} onClick={onClickCloseFilters}>
                    <svg height="48" viewBox="0 0 48 48" width="48">
                        <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z" />
                        <path d="M0-.5h48v48h-48z" fill="none" />
                    </svg>
                    <h4>Фільтри</h4>
                </div>
                <article className={styles.products_groop}>
                    <h4>Група товарів</h4>
                    {allProductsGroop.map((el, index) => {
                        return <span key={index}>
                            <input
                                type="checkbox"
                                checked={activeFilters.category.includes(el)}
                                onChange={() => dispatch(toggleFilter({ filterType: "category", value: el }))} />
                            {el}
                        </span>
                    })}
                </article>
                <article className={styles.products_groop}>
                    <h4>Колір</h4>
                    <div className={styles.products_groop__colours}>
                        {colours.map((item, i) => {
                            const isSelected = activeFilters.colours.includes(item);
                            return (
                                <div
                                    key={i}
                                    className={`${styles.color} ${isSelected ? styles.selected : ""}`}
                                    style={{ background: item }}
                                    onClick={() => dispatch(toggleFilter({ filterType: "colours", value: item }))}
                                ></div>
                            );
                        })}
                    </div>
                </article>
                <article className={styles.products_groop__wrap_gender}>
                    <h4>Для кого:</h4>
                    <div className={styles.products_groop__gender}>
                        {gender.map((el, i) => {
                            const isSelected = activeFilters.gender.includes(el);
                            return (
                                <div key={i}
                                    className={`${isSelected ? styles.select : ""}`}
                                    onClick={() => dispatch(toggleFilter({ filterType: "gender", value: el }))}
                                >
                                    {el === "female" && (
                                        <span>
                                            <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                                                <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                                                <rect fill="none" height="50" width="50" />
                                                <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701
                                c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133
                                c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006
                                c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25
                                c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608
                                C37.731,39.188,31.202,38.941,29.933,35.528z" />
                                            </svg>
                                        </span>
                                    )}
                                    {el === "male" && (
                                        <span>
                                            <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                                                <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                                                <rect fill="none" height="50" width="50" />
                                                <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818
                                c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759
                                c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818
                                c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924
                                c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                                            </svg>
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </article>
            </aside>
        )

    }
    return (
        <aside className={`${styles.filter__wrap} ${!activeFilters.visible ? styles.hidden : styles.open}`}>
            <div className={styles.clouse} onClick={onClickCloseFilters}>
                <svg height="48" viewBox="0 0 48 48" width="48">
                    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17-2.83-2.83-12 12 12 12z" />
                    <path d="M0-.5h48v48h-48z" fill="none" />
                </svg>
                <h4>Фільтри</h4>
            </div>
            <article className={styles.products_groop}>
                <h4>Група товарів</h4>
                {categoryes.map((el, index) => {
                    return <span key={index}><input type="checkbox" checked={activeFilters.category.includes(el)} onChange={() => dispatch(toggleFilter({ filterType: "category", value: el }))} />{el}</span>
                })}
            </article>
            <article className={styles.products_groop}>
                <h4>Колір</h4>
                <div className={styles.products_groop__colours}>
                    {colours.map((item, i) => {
                        const isSelected = activeFilters.colours.includes(item);
                        return (
                            <div
                                key={i}
                                className={`${styles.color} ${isSelected ? styles.selected : ""}`}
                                style={{ background: item }}
                                onClick={() => dispatch(toggleFilter({ filterType: "colours", value: item }))}
                            ></div>
                        );
                    })}
                </div>
            </article>
            <article className={styles.products_groop__wrap_gender}>
                <h4>Для кого:</h4>
                <div className={styles.products_groop__gender}>
                    {gender.map((el, i) => {
                        const isSelected = activeFilters.gender.includes(el);
                        return (
                            <div key={i}
                                className={`${isSelected ? styles.select : ""}`}
                                onClick={() => dispatch(toggleFilter({ filterType: "gender", value: el }))}
                            >
                                {el === "female" && (
                                    <span>
                                        <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                                            <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                                            <rect fill="none" height="50" width="50" />
                                            <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701
                                c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133
                                c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006
                                c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25
                                c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608
                                C37.731,39.188,31.202,38.941,29.933,35.528z" />
                                        </svg>
                                    </span>
                                )}
                                {el === "male" && (
                                    <span>
                                        <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                                            <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                                            <rect fill="none" height="50" width="50" />
                                            <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818
                                c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759
                                c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818
                                c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924
                                c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                                        </svg>
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </article>
            <article className={styles.products_groop}>
                <h4>Серія</h4>
                {series.map((el, index) => {
                    return <span key={index}><input type="checkbox" checked={activeFilters.series.includes(el)} onChange={() => dispatch(toggleFilter({ filterType: "series", value: el }))} />{el}</span>
                })}
            </article>
            {classification.some(el => el !== "0") && (
                <article className={styles.products_groop}>
                    <h4>Классифікація</h4>
                    {classification.map((el, index) =>
                        el !== "0"
                            ? (<span key={index}><input type="checkbox" />{el}</span>)
                            : ("")
                    )}
                </article>
            )}
            {props.from === "backpacks" && structures.some(el => el !== "0") && (
                <article className={styles.products_groop}>
                    <h4>Конструкція спинки</h4>
                    {structures.map((el, index) => {
                        return <span key={index}>
                            <input type="checkbox"
                                checked={activeFilters.structures.includes(el)}
                                onChange={() => {
                                    dispatch(toggleFilter({ filterType: "structures", value: el }));
                                }}
                            />
                            {el}
                        </span>
                    })}
                </article>
            )}
            <article className={styles.products_groop}>
                <h4>Кількість відділень</h4>
                {compartments
                    .sort((a, b) => a - b)
                    .map((el, index) => {
                        return <span key={index}><input type="checkbox" checked={activeFilters.compartments.includes(el)} onChange={() => dispatch(toggleFilter({ filterType: "compartments", value: el }))} />{el}</span>
                    })}
            </article>
        </aside>
    )
}

export default Filters;