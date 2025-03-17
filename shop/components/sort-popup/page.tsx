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
  { name: "за замовчуванням", sortProperty: SortPropertyEnum.DEFAULT },
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
       <svg height="30px" viewBox="0 0 512 512" width="30px">
        <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 "/>
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