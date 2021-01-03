import React, {useState, useEffect} from 'react';
import './Header.css';
import ResultItem from './ResultItem';
export default function Header() {

  const baseURL= 'https://api.edamam.com';
  const api_key = '51c012775148e57fcc2f5da41fc1c75d';
  const app_id = '507e29f3';
  const search = `/search`;
  
  
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState('');

  const changeHandler = (e) => {
    setValue(e.target.value)
  }

  const submitForm = (e)=>{
    e.preventDefault();
    
    fetch(`${baseURL}${search}?q=${value}&app_id=${app_id}&app_key=${api_key}`)
      .then(res=>res.json())
      .then(data => setRecipes(data.hits));
  }
   
      return (
        <div className="header">
          <h1 className="header__title">Food Finder</h1>
              <form className="search-form" onSubmit={submitForm}>
                  <div className='search-form__bar'>
                      <input 
                        type="text" 
                        name="ingredients"
                        value={value}
                        onChange={e => changeHandler(e)}>
                      </input>
                      <button type="submit">Search</button>
                  </div>
              </form>
              {recipes.map(item => 
                <ResultItem recipe={item.recipe}/>
              )}
        </div>
      )  
}