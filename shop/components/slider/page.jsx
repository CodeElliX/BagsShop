
"use client";
import styles from "./slider.module.css";
import Image from "next/image";
import { useRef, useState, useLayoutEffect } from "react";

const CategoriesSlider = ({ image }) => {
    const sliderRef = useRef(null);
    const slideRef = useRef(null);
    const [index, setIndex] = useState(0);
    const [cardWidth, setCardWidth] = useState(null);
    const [activeImage, setActiveImage] = useState(image[0]);

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
        sliderRef.current.style.transform = `translateX(-${image.length * cardWidth}px)`;

        setTimeout(() => {
            if (sliderRef.current) {
                sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            }
            setIndex(image.length);
        }, 50);
    }, [cardWidth]);

    const changeActiveImage = (direction) => {
        const currentIndex = image.indexOf(activeImage);
        let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

        if (newIndex >= image.length) newIndex = 0;
        if (newIndex < 0) newIndex = image.length - 1;

        setActiveImage(image[newIndex]);
        scrollToActiveSlide(newIndex);
    };

    const handleImageClick = (img) => {
        const newIndex = image.indexOf(img);
        setActiveImage(img);
        scrollToActiveSlide(newIndex);
    };

    const scrollToActiveSlide = (newIndex) => {
        if (!sliderRef.current || cardWidth === null) return;

        const visibleSlides = Math.floor(sliderRef.current.offsetWidth / cardWidth);
        const firstVisibleIndex = Math.max(index - visibleSlides + 1, 0);
        const lastVisibleIndex = index;

        if (newIndex < firstVisibleIndex || newIndex > lastVisibleIndex) {
            const newScrollIndex = Math.max(0, newIndex - Math.floor(visibleSlides / 2));
            sliderRef.current.style.transition = "transform 0.5s ease-in-out";
            sliderRef.current.style.transform = `translateX(-${newScrollIndex * cardWidth}px)`;
            setIndex(newScrollIndex);
        }
    };

    const handleLeftArrowClick = () => changeActiveImage("prev");
    const handleRightArrowClick = () => changeActiveImage("next");

    return (
        <div className={styles.wrap}>
            <div className={styles.mainImageContainer}>
                <div className={styles.arrow_left} onClick={handleLeftArrowClick}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 5l-8 7 8 7" />
                    </svg>
                </div>

                {image.length > 0 && (
                    <Image
                        src={activeImage}
                        alt="product image"
                        width={400}
                        height={400}
                        className={styles.slider__main_img}
                    />
                )}

                <div className={styles.arrow_right} onClick={handleRightArrowClick}>
                    <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 5l8 7-8 7" />
                    </svg>
                </div>
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.sliderWrapper}>
                    <div className={styles.slider} ref={sliderRef}>
                        {[...image, ...image, ...image].map((img, i) => (
                            <div
                                key={i}
                                className={`${styles.slide} ${img === activeImage ? styles.activeSlide : ""}`}
                                ref={i === 0 ? slideRef : null}
                                onClick={() => handleImageClick(img)}
                            >
                                <Image src={img} alt="card" width={150} height={150} priority />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.arrows}>
                    <div className={styles.arrow_left} onClick={handleLeftArrowClick}>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 5l-8 7 8 7" />
                        </svg>
                    </div>
                    <div className={styles.arrow_right} onClick={handleRightArrowClick}>
                        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M8 5l8 7-8 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesSlider;

