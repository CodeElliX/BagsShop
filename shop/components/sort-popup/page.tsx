"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSort, setSort, SortPropertyEnum } from "../../src/app/redux/filterSlice";
import styles from './sort-popup.module.css';

type SortItem = {
  name: string,
  sortProperty: SortPropertyEnum
}

export const list: SortItem[] = [
  { name: "популярності", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "непопулярності", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "спочатку дорожче", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "спочатку дешевше", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "по алфавіту з початку", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "по алфавіту з кінця", sortProperty: SortPropertyEnum.TITLE_ASC }
];

export const SortPopup = React.memo(() => {
  const sortRef = useRef<HTMLDivElement>(null);

  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);


  const onClickListItem = (obj: SortItem) => {
    setOpen(false);
    dispatch(setSort(obj));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    }
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);

  }, [])

  return (
    <div ref={sortRef} className={styles.sort__wrap} onClick={() => setOpen(!open)}>
      <div className={styles.sort__label}>
        <span>{sort.name}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
      </div>
      {open && (
        <div className={styles.sort__popup}>
          <ul>
            {list.map((obj, i) => {
              return (
                <li
                  key={i}
                  className={sort.sortProperty === obj.sortProperty ? "active" : ""}
                  onClick={() => onClickListItem(obj)}
                >
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
)

SortPopup.displayName = "SortPopup";