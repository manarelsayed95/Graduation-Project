import React, {Component} from "react";
class SocialSection extends Component {
 

    render(){
   return(
    <div className="social_icon_area clearfix">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="footer-social-area d-flex">
                    <div className="single-icon">
                        <a href="#"><i className="fab fa-facebook-square"></i> <span>facebook</span></a>
                    </div>
                  
                    <div className="single-icon">
                        <a href="#"><i className="fab fa-instagram"></i> <span>Instagram</span></a>
                    </div>
                 
                </div>
            </div>
        </div>
    </div>
</div>

   );
    }
}
export default SocialSection;
