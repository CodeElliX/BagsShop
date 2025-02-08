'use client'
import { useState, useRef, useCallback } from 'react';
import styles from './search.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {setSearchValue} from '../redux/filterSlice'
import debounce from 'lodash.debounce';

const Search = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        inputRef.current.focus();
     }
    const updateSearchValue = useCallback(
        debounce((str) => {
        dispatch(setSearchValue(str));
    }, 200), 
    []
    )

    const onChangeInput = (event) => {
      setValue(event.target.value);
      updateSearchValue(event.target.value);
    }
 

    return (
        <div className={styles.root}>
        <svg
            className={styles.icon}
            enableBackground='new 0 0 32 32'
            id='Editable-line'
            version='1.1'
            viewBox='0 0 32 32'
            xmlns='http://www.w3.org/2000/svg'
        >
            <circle
                cx='14'
                cy='14'
                fill='none'
                id='XMLID_42_'
                r='9'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
            />
            <line
                fill='none'
                id='XMLID_44_'
                stroke='#000000'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeMiterlimit='10'
                strokeWidth='2'
                x1='27'
                x2='20.366'
                y1='27'
                y2='20.366'
            />
        </svg>
        <input
            ref={inputRef}
            value={value}
            className={styles.input}
            type="text"
            placeholder="Пошук..."
            onChange={onChangeInput}
        />
            <svg onClick={onClickClear} className={styles.clearIcon} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48"><path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" /><path d="M0 0h48v48h-48z" fill="none" /></svg>
        
        
    </div>
    )
}

export default Search;