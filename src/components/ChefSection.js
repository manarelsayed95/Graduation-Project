import React, {Component} from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link , Redirect } from "react-router-dom";

class ChefSection extends Component {
    constructor() {
        super();
        this.state = {
            chefs : []
         };
      }
    
    componentDidMount(){
     axios.get('http://127.0.0.1:8000/api/chefs')
     .then(res=>{
             console.log(res.data.data)
            //  const chefs = res.data;
             this.setState({
                 chefs: res.data.data
             });
         })
    }

    render(){
        
   return(
        

        <div className="container mt-5">
            <h2 className="text-center">ها هم شيفتنا</h2>
            <hr/>
                <div className="container">
                    {this.state.chefs.length && ( 
                        <div className="slide-box row">
                            {this.state.chefs.map(chef=>{
                                return(
                                    
                                <div className="col-lg-5 mb-5" id="chef-parent">
                                    <div className="media">
                                       
                                        <Link to={`/chefs/${chef.id}`}> 
                                            <img className="img-fluid" href="" src={`http://127.0.0.1:8000/uploads/${chef.image}`} className="mr-3 img-fluid" id="chef-img" alt=""/>
                                        </Link>
                                       
                                    </div>
                                    <div className="media-body col-12"  id="chef-name">
                                        <h5 className="mt-0"> {chef.name} </h5>
                                            
                                        <p> {chef.work_place} </p>
                                    </div>
                                    
                                </div>
                                
                                );}
                                )}
                        </div>
                    )}
                </div>
                                
        </div>
      
 
    );
}
}
export default ChefSection;