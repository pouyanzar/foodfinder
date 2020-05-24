import React, { Component } from 'react';
import ResultItems from'./ResultItem';

export default class Results extends Component {
  render() {
    console.log(this.props.recipes);
    let results = this.props.recipes.map(item=>
         {return <ResultItems result={item} key={item.recipe_id}></ResultItems>})
    return (
      <div className="results-list">
        {results}
      </div>
    )
  }
}
