import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Item = ({item}) => {

    const navigate = useNavigate()
    const {pathname} = useLocation()

    return (
        <div onClick={()=> navigate(`${pathname}${pathname === '/' ? '' : '/'}details/${item.idDrink}`)}>
            <img src={item.strDrinkThumb} alt="" />
            <p>{item.strDrink}</p>
        </div>
    );
};

export default Item;