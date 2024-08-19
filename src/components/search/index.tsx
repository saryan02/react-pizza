import React, {useCallback, useContext, useEffect, useRef, useState} from 'react'
//@ts-ignore
import debounce from 'lodash.debounce'
import styles from './Search.module.scss'
// import {SearchContext} from "../../App";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slices/filter/slice";




const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');
    // const { setSearchValue} = useContext(SearchContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const onClickClear = () => {
        dispatch(setSearchValue(' '))
        setValue('')
        // document.querySelector('input').focus();
        inputRef.current?.focus();
    };
    const updateSearchValue = useCallback(
         debounce((str:string) => {
            dispatch(setSearchValue(str))
        }, 500), []
    )

    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }


    return (
        <div className={styles.root}>

            <input ref={inputRef}
                   value={value}
                   onChange={onChangeInput}
                   className={styles.input}
                   placeholder='Поиск пиццы...'/>
            {value &&
                <svg onClick={() => onClickClear()} className={styles.clearIcon} height="48" viewBox="0 0 48 48"
                     width="48" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>}

        </div>


    )
}

export default Search