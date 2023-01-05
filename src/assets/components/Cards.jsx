import React from 'react';

const Cards = ({data}) => {
    return (
        <div>
            <picture>
                <img src={`${data.strDrinkThumb}`} alt="" />
            </picture>
            <div>
                <h3>{data.strDrink}</h3>
                <p>{data.strInstructions}</p>
            </div>            
        </div>
    );
};

export default Cards;