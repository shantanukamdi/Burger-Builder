import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log('Object.keys(props.ingredients) '+Object.keys(props.ingredients));
    let transformedIngredients = Object.keys(props.ingredients)
                                        .map(igKey => {
                                            console.log('igKey'+igKey);
                                            return [...Array(props.ingredients[igKey])]
                                                    .map((_, i) => {
                                                       return <BurgerIngredient key={igKey + i} type={igKey} />
                                                    });
                                        })
                                        .reduce((arr, el) => {
                                            return arr.concat(el);
                                        }, []);
    console.log('transformedIngredients',transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = 'Please start adding ingredients';
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;