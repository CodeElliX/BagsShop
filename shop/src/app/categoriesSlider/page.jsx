// "use client";
// import styles from "./categoriesSlider.module.css";
// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";

// const images = [
//     "/BagsShop/bunanka.png",
//     "/BagsShop/bags_school.png",
//     "/BagsShop/cross_body.png",
//     "/BagsShop/wallets.png",
//     "/BagsShop/bags_old.png",
//     "/BagsShop/shopers.png",
//     "/BagsShop/bags_kids.png"
// ];

// const CategoriesSlider = () => {
//     const sliderRef = useRef(null);
//     const [index, setIndex] = useState(images.length); // Начинаем с середины массива
//     const cardWidth = 220; // ширина карточки + gap
//     const totalCards = images.length * 3; // Тройной массив для бесконечности

//     useEffect(() => {
//         if (!sliderRef.current) return;
//         sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
//     }, []);

//     const moveSlider = (direction) => {
//         let newIndex = direction === "next" ? index + 1 : index - 1;

//         sliderRef.current.style.transition = "transform 0.3s ease-in-out";
//         sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;

//         setTimeout(() => {
//             if (newIndex >= totalCards - images.length) {
//                 // Если дошли до конца массива → мгновенно перескакиваем в середину
//                 sliderRef.current.style.transition = "none";
//                 newIndex = images.length;
//                 sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
//             } else if (newIndex < images.length) {
//                 // Если ушли влево за пределы → перескакиваем в середину
//                 sliderRef.current.style.transition = "none";
//                 newIndex = totalCards - images.length * 2;
//                 sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
//             }
//             setIndex(newIndex);
//         }, 300);
        
//         setIndex(newIndex);
//     };

//     return (
//         <div className={styles.sliderContainer}>
//             <div className={styles.sliderWrapper}>
//                 <div className={styles.slider} ref={sliderRef}>
//                     {[...images, ...images, ...images].map((img, i) => (
//                         <div key={i} className={styles.slide}>
//                             <Image src={img} alt="card" width={200} height={150} priority />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className={styles.arrows}>
//                 <div className={styles.arrow_left} onClick={() => moveSlider("prev")}>
//                     <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M15 5l-8 7 8 7" />
//                     </svg>
//                 </div>
//                 <div className={styles.arrow_right} onClick={() => moveSlider("next")}>
//                     <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M8 5l8 7-8 7" />
//                     </svg>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CategoriesSlider;


"use client";
import styles from "./categoriesSlider.module.css";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const images = [
    "/BagsShop/bunanka.png",
    "/BagsShop/bags_school.png",
    "/BagsShop/cross_body.png",
    "/BagsShop/wallets.png",
    "/BagsShop/bags_old.png",
    "/BagsShop/shopers.png",
    "/BagsShop/bags_kids.png"
];

const CategoriesSlider = () => {
    const sliderRef = useRef(null);
    const slideRef = useRef(null);
    const [index, setIndex] = useState(images.length); // Начинаем с середины массива
    const [cardWidth, setCardWidth] = useState(170); // Начальное значение (обновится)

    useEffect(() => {
        if (slideRef.current) {
            const slideWidth = slideRef.current.offsetWidth; // Автоматически узнаём ширину карточки
            const gap = 20; // Должен совпадать с `gap: 20px` в CSS
            setCardWidth(slideWidth + gap); // Учитываем gap при расчёте
        }
    }, []);

    useEffect(() => {
        if (!sliderRef.current) return;
        sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
    }, [index, cardWidth]);

    const moveSlider = (direction) => {
        let newIndex = direction === "next" ? index + 1 : index - 1;

        sliderRef.current.style.transition = "transform 0.3s ease-in-out";
        sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;

        setTimeout(() => {
            const totalCards = images.length * 3;
            if (newIndex >= totalCards - images.length) {
                sliderRef.current.style.transition = "none";
                newIndex = images.length;
                sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
            } else if (newIndex < images.length) {
                sliderRef.current.style.transition = "none";
                newIndex = totalCards - images.length * 2;
                sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
            }
            setIndex(newIndex);
        }, 300);
        
        setIndex(newIndex);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                <div className={styles.slider} ref={sliderRef}>
                    {[...images, ...images, ...images].map((img, i) => (
                        <div key={i} className={styles.slide} ref={i === 0 ? slideRef : null}>
                            <Image src={img} alt="card" width={150} height={150} priority />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.arrows}>
                <div className={styles.arrow_left} onClick={() => moveSlider("prev")}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 5l-8 7 8 7" />
                    </svg>
                </div>
                <div className={styles.arrow_right} onClick={() => moveSlider("next")}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 5l8 7-8 7" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;
