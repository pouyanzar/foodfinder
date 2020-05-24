import React, { Component } from 'react'
import './Header.css';
import {Link} from 'react-router-dom';
class Header extends Component {
    

    render() {

    return (
      <div className="header">
        <h1 className="header__title">Food Finder</h1>
        <div className="header__search">
            <div className='links'>
                <Link to='/'> <div className='home'>HOME</div> </Link>
                <Link to='/upload'> <div className='upload'>Upload</div> </Link>
            </div>           
            <form className="search-form" onSubmit={this.props.searchFunc}>
                {/* <select className="search-option" name="search-option">
                    <option>Top Rated</option>
                    <option> Trending</option>
                </select>   */}
                <div className='search-form__bar'>
                    {/* use the ref passed from the parent  */}
                    <input ref={this.props.childRef} type="text" name="ingredients"></input>
                    <button type="submit" > Search </button>
                </div>
            </form>
        </div>
      </div>
    )
  }
}

export default React.forwardRef((props,ref)=>{return <Header childRef={ref} {...props}></Header>});