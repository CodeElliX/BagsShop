"use client"
import { useEffect, useState } from 'react';
import styles from './scroll-up.module.css';

const ScrollToUp = () => {

    const onclickScrollUp = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`${styles.scroll__wrap} ${isVisible ? styles.show : ""}`}
            onClick={onclickScrollUp}>
            <div className={styles.scroll}>
                <svg className={styles.scroll__svg} viewBox="0 0 24 24" fill="black">
                    <path d="M12 4L6 10H10V20H14V10H18L12 4Z" />
                </svg>

                <svg className={styles.text_circle} viewBox="0 0 100 100">
                    <defs>
                        <path id="circlePath" d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
                    </defs>
                    <text fill="black" fontSize="14">
                        <textPath href="#circlePath">SCROLL TO UP • • SCROLL TO UP • •</textPath>
                    </text>
                </svg>
            </div>
        </div>

    );
};

export default ScrollToUp;
