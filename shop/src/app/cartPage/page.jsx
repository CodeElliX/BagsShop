"use client"
import styles from "./cart.module.css"
import CartItem from '../../../components/cartItem/page'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { removeAllItems } from '../redux/cartSlice'
import CartEmpty from '../cartEmpty/page'
import { useRouter } from "next/navigation";

const cartPage = () => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const cartItems = useSelector(state => state.cart.items);
  const totalCount = useSelector(state => state.cart.totalCount);
  const isMounted = useRef(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  const removeCart = () => {
    dispatch(removeAllItems());
  }
  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(cartItems);
      localStorage.setItem('cart', json)
    }
    isMounted.current = true;
  }, [cartItems])

  return (
    <>
      {cartItems.length === 0 ? <CartEmpty /> : (
        <div className={styles.cart}>
          <div className={styles.cart__top}>
            <div className={styles.content__tittle}>
              <svg width="26" height="26" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Кошик</span>
            </div>
            <div className={styles.cart__clear}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 5H4.16667H17.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33337 9.16667V14.1667" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6666 9.16667V14.1667" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span onClick={removeCart}>Очистити кошик</span>
            </div>
          </div>
          <div className={styles.cart__content_items}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                return <CartItem key={item.id} {...item} />
              })
            ) : (<p>Кошик пустий</p>)}
          </div>
          <div className={styles.cart__bottom}>
            <div className={styles.cart__bottom_details}>
              <span> Всього товарів: <b>{totalCount} шт.</b> </span>
              <span> Сума замовлення: <b>{totalPrice}грн</b> </span>
            </div>
            <div className={styles.cart__bottom_buttons}>
              <button className={styles.button_go_back} onClick={onClickBack}>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                  <path d="M7 13L1 6.93015L6.86175 1" stroke="#00000080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Продовжити покупки</span>
              </button>
              <button className={styles.button_pay_btn}>
                <span>Оформити замовлення</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default cartPage;