import React , {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";


class MainSection extends Component {
    constructor()
    {
        super();
        this.state={
        recipes:[]
        }
    }
    
    componentDidMount()
    {
       axios.get('http://127.0.0.1:8000/api/recipes')
       .then(result=>{this.setState({recipes:result.data.data})});
    
    }
  render(){
    return (
        <div className="MainSection container">
<div>
<h2>افضل الوصفات</h2>
<hr/>
</div>
{this.state.recipes.map(recipe=>{
            return(
       

            <div className="col-12">
                <div className="list-blog single-post d-sm-flex wow fadeInUpBig" data-wow-delay=".2s">
                
                    <div className="post-thumb">
                    <img src={`http://localhost:8000/uploads/recipes/${recipe.recipe_image}`} alt="" />

                    </div>
                 
                    <div className="post-content">
                        <div className="post-meta d-flex">
                            <div className="post-author-date-area d-flex">
                             
                                <div className="post-author">
                                    <a href="#">By {recipe.name}</a>
                                </div>
                           
                                <div className="post-date">
                                    <a href="#"> {recipe.created_at}</a>
                                </div>
                            </div>
                       
                            <div className="post-comment-share-area d-flex">
                        
                            </div>
                        </div>
                        <a href="#">
                            <h4 className="post-headline">{recipe.RecipeName}</h4>
                        </a>
                        <p>{recipe.details}</p>
                        <div className="post-thumb">
                        <a href="#" className="read-more">Continue Reading..</a>
                         </div>
                      
                        
                    </div>
                </div>
            </div>

      ) } )}

         </div>
          
);
 
}
  }


export default MainSection;