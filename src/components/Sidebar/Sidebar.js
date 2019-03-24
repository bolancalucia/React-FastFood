import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  
  OnClickDetails = id => {
    this.props.details(id);
  };


  render() {
    return (
      <div className="card-header-fav">
        <h2 className="header-fav">My Favorites</h2>
        {this.props.favorites.map((Product, index) => {
          return (
            <div className="product-div">
              <img
                className="img-sidebar"
                src={require("../../assets/images/" + Product.picture)}
                alt={Product.name}
              />
              <div className="product-info" >
                <h4>
                <Link
                      to={"/details/" + Product.id}>
                      {Product.name}
                    </Link></h4>
                <p>${Product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
