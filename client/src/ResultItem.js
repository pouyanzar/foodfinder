import React, { Component } from 'react';
import './ResultItem.css';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';

export default class ResultItem extends Component {
  
  render() {
    let {result:item} =this.props;

    let popupDisplay;
    
    if(!item.source_url){
      
      popupDisplay=(<div className='ingredientPopup'> 
                    <div>{item.ingredients}</div>
                    <div>{item.instructions}</div>
                  </div>)
    }else{
      popupDisplay=<div className='iframePopup'> 
                      <iframe allowFullScreen frameBorder='0' src={item.source_url}></iframe>
                    </div>
    }
    return (
      <div className="result">
        <a href={item.source_url}  target="_blank"> <img className="result__image" src={item.image_url}></img> </a>
        <div className="result__title">{item.title}</div>
        <div className="result__publisher">{item.publisher}</div>
        <div className="result__social">{item.social_rank}</div>
        <Popup id='popup' trigger={<button className="result__button"> See Recipe</button>} position='top center'>
          {popupDisplay}
        </Popup>
      </div>
    )
  }
}
