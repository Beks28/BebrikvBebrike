import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetailsAsync } from '../../redux/actions/actions';
import Slider from './Slider';

const Details = () => {

    const {data} = useSelector(state => state.details)
    const dispatch = useDispatch()
    const {id} = useParams()
    console.log(data);

    useEffect(()=> {
        dispatch(getDetailsAsync(id))
        
    }, [dispatch, id])

    const generateIngredients = () => {
        console.log(Object.entries(data));
        return Object.entries(data)
            .filter(([key, value]) => key.startsWith('strIngredient') && value)
            .map(([_, value]) => value)
    }

    const ingredients = generateIngredients()
    console.log(ingredients);

    return (
        <div>
            <h2>Details</h2>
            <img src={data.strDrinkThumb} alt="" />
            <h4>{data.strDrink}</h4>
            <Slider
                ingredients = {ingredients}
            />
            
        </div>
    );
};

export default Details;