"use client";
import styles from "./categoriesSlider.module.css";
import Image from "next/image";
import { useRef, useState, useLayoutEffect } from "react";

const images = [
    "/bunanka.png",
    "/bags_school.png",
    "/cross_body.png",
    "/wallets.png",
    "/bags_old.png",
    "/shopers.png",
    "/bags_kids.png"
];

const CategoriesSlider = () => {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const slideRef = useRef<HTMLDivElement | null>(null);
    const [index, setIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState<number | null>(null);

    useLayoutEffect(() => {
        if (slideRef.current) {
            const slideWidth = slideRef.current.offsetWidth;
            const gap = 10;
            setCardWidth(slideWidth + gap);
        }
    }, []);

    useLayoutEffect(() => {
        if (!sliderRef.current || cardWidth === null) return;

        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = `translateX(-${images.length * cardWidth}px)`;

        setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            }
            setIndex(images.length);
        }, 50);
    }, [cardWidth]);

    const moveSlider = (direction: string) => {
        if (cardWidth === null) return;

        let newIndex = direction === "next" ? index + 1 : index - 1;

        if (sliderRef.current) {
            sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
        }

        setTimeout(() => {
            const totalCards = images.length * 3;
            if (sliderRef.current && (newIndex >= totalCards - images.length)) {
                sliderRef.current.style.transition = "none";
                newIndex = images.length;
                sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
            } else if (sliderRef.current && (newIndex < images.length)) {
                sliderRef.current.style.transition = "none";
                newIndex = totalCards - images.length * 2;
                sliderRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
            }
            setIndex(newIndex);
        }, 500);

        setIndex(newIndex);
    };

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper}>
                <div className={styles.slider} ref={sliderRef}>
                    {[...images, ...images, ...images].map((img, i) => (
                        <div key={i} className={styles.slide} ref={i === 0 ? slideRef : null}>
                            <Image src={img} alt="card" width={135} height={135} priority />
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

