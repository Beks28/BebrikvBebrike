import React, { useEffect, useId, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCocktailsAsync } from '../../redux/actions/actions';
import Item from '../Item/Item';


const Search = () => {

    const searchParams = new URLSearchParams(window.location.search);
    const foundParams = searchParams.get("search") || '';

    // URLSearchParams используется в ситуациях, когда вам нужно работать с параметрами URL,
    // извлекать их значения или создавать URL с определенными параметрами.

    const {data} = useSelector(state => state.search)
    const dispatch = useDispatch()
    const [value, setValue] = useState('' || foundParams)
    const inputRef = useRef()
    const inputId = useId()

    useEffect(()=> {
        dispatch(searchCocktailsAsync(value))
    }, [dispatch, value])

    useEffect(()=> {
        inputRef.current.focus()
    }, [])

    const items = data?.map((item) => <Item key={item.idDrink} item={item} />);

    const handleValue = (e) => {
        setValue(e.target.value)
        const currentUrl = new URL(window.location.href)
        currentUrl.searchParams.set('search', e.target.value)
        window.history.pushState({path: e.target.value}, '', currentUrl.toString())
    }

    return (
        <>
            <label>Search</label>
            <input 
                type="text" 
                value={value || foundParams}
                id={inputId}
                ref={inputRef}
                onChange={handleValue}
            />
            <div className="wrap">
                {data ? items : <h2>No data</h2>}
            </div>
        </>
    );
};

export default Search;