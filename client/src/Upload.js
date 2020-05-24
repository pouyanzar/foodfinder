import React, { Component } from 'react';
import './Upload.css';
import {Redirect} from 'react-router-dom';

export default class Upload extends Component {

    constructor(props){
        super(props);
        this.title = React.createRef();
        this.ingredients = React.createRef();
        this.instructions = React.createRef();
        this.image = React.createRef();
    }
state={redirect:false}
componentDidMount(){
    this.setState({redirect:false});
}
submitForm= (e)=>{
    e.preventDefault();
    var formData = new FormData();
    formData.append('title',this.title.current.value);
    formData.append('ingredients',this.ingredients.current.value);
    formData.append('instructions',this.instructions.current.value);
    formData.append('image',this.image.current.files[0]);
    let init= {
        method:'POST',
        // body: JSON.stringify({title: this.title.current.value,
        //                         ingredients:this.ingredients.current.value,
        //                          instructions:this.instructions.current.value ,
        //                         image:this.image.current.fileInput }),
        body: formData
    }
    fetch('http://localhost:8080/upload',init).then(res=>
    { console.log(res);
      this.setState({redirect:true})  })
      //.then(res2=>console.log(res2))
        .catch(err => console.log(err));
     
}  

renderRedirect=()=>{
    if(this.state.redirect)
        {return <Redirect to='/'/>}
}
  
render() {
    return (
      <div className='upload-container'>
      {this.renderRedirect()}
        <form onSubmit={this.submitForm}>
           <label > Title <input ref={this.title} name="Title"></input> </label>
           <label > Ingredients <textarea ref={this.ingredients} className="upload_ingredients" name="Ingredient"></textarea> </label>
           <label> Instructions <textarea className="upload__instruction" ref={this.instructions} name="Instructions"></textarea> </label>
           <label>Image Upload <input className="upload__img" name='image' ref={this.image} type='file'></input></label>
           <button type="submit"> Submit your recipe! </button>
        </form>
      </div>
    )
  }
}
