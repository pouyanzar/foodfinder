import React from 'react';
import './ResultItem.css';

export default function Resultresult({recipe}) {
  
   
    return (
      <div className="result">
        <a href={recipe.url} target="_blank"> 
          <img className="result__image" src={recipe.image}/>
        </a>
        <div className="result__title">
          {recipe.label}
        </div>
        <div className="result__publisher">
          Recipe Source: <span>{recipe.source}</span>
        </div>
        <a href={recipe.url} target="_blank">
          <button className="result__button"> 
            See Recipe
          </button>
        </a>
      </div>
    )
}
