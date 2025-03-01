
"use client";
import { useState } from "react";
import styles from "./slider.module.css";
import Image from "next/image";

const Slider = ({ image = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onClickArrowNext = () => {
        setCurrentIndex((prevIndex) => {
          return prevIndex < image.length - 1 ? prevIndex + 1 : prevIndex
          
        }
        );
    };

    const onClickArrowPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (
        <div className={styles.slider_wrap}>
            <div className={styles.slider__icons}>
                <svg onClick={onClickArrowPrev} className={styles.arrow_left} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
                    <path d="M74.12,35.88a3,3,0,0,0-4.24,0l-26,26a3,3,0,0,0,0,4.24l26,26a3,3,0,0,0,4.24-4.24L50.24,64,74.12,40.12A3,3,0,0,0,74.12,35.88Z" />
                </svg>

                {image.length > 0 && (
                    <Image
                        src={image[currentIndex]}
                        alt="product image"
                        width={400}
                        height={400}
                        className={styles.slider__main_img}
                    />
                )}

                <svg onClick={onClickArrowNext} className={styles.arrow_right} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z" />
                    <path d="M58.12,35.88a3,3,0,0,0-4.24,4.24L77.76,64,53.88,87.88a3,3,0,1,0,4.24,4.24l26-26a3,3,0,0,0,0-4.24Z" />
                </svg>
            </div>

            <section className={styles.slider__next} style={{ transform: `translateX(-${currentIndex * 105}px)` }}>
                {image.map((img, index) => {
                    let position = index === currentIndex ? styles.activeSlide : styles.nextSlide;

                    return (
                        <div key={index} className={position}>
                            <Image width={100} height={100} src={img} alt="icon" className={styles.slider__next_img} />
                        </div>
                    );
                })}
            </section>

        </div>
    );
};

export default Slider;
