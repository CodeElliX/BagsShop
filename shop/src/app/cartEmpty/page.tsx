import Link from 'next/link'
import emptyCart from "../../../public/empty-cart.png";
import Image from 'next/image';
import styles from './cartEmpty.module.css'

const CartEmpty = () => {
    return (
        <>
            <div className={styles.cart_empty__wrap}>
                <h2>Кошик пустий😔</h2>
                <p>
                    Скоріш за все, ви не обрали ще товари. <br />
                    Для того, щоб замовити товари, перейди на головну сторінку.
                </p>
                <Image src={emptyCart} alt="empty" width={300} height={300} />
                <Link href="/">
                    <button>На головну</button>
                </Link>
            </div>
        </>
    )
}

export default CartEmpty;