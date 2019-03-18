import React, { Component } from "react";
import "./Details.css";
import { Link } from "react-router-dom";
import { Rate } from "../Rate/Rate";
import { FavBtn } from "../FavBtn/FavBtn";

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choosed: this.props.obj
    };
  }

  OnClickFavAdd(prod) {
    this.props.favAdd(prod);
  }

  OnClickFavRmv(prod) {
    this.props.favRmv(prod);
  }

  render() {
    return (
      <div className="content">
        <div className="content-header">
          <h1>{this.state.choosed.name}</h1>
        </div>
        <div className="main-content">
          <div className="img-div">
            <img
              className="img"
              src={require("../../assets/images/" + this.state.choosed.picture)}
              alt={this.state.choosed.name}
            />
          </div>
          <div id="info-div">
            <h3 id="product-price">${this.state.choosed.price}</h3>

            <FavBtn
              obj={this.state.choosed}
              status={this.state.choosed.flag}
              key={"key ${index}"}
              favAdd={this.OnClickFavAdd.bind(this)}
              favRmv={this.OnClickFavRmv.bind(this)}
              id="product-fav"
            />
          </div>
          <p>{this.state.choosed.description}</p>
        </div>
        <Rate rates={this.state.choosed.reviews} id="product-reviews" />
        <br />
        <br />
        <div>
          <h2>Reviews</h2>
          <div className="reviews-div">
            {this.state.choosed.reviews.map(Review => {
              return (
                <p className="comment-div">
                  <span>
                    <b className="comment-name">{Review.username}&nbsp;</b>
                    <span className="comment-desc">{Review.comment}</span>
                  </span>
                  <span
                    className="crop"
                    style={{ width: (Review.rate * 75) / 5 }}
                  >
                    <span className="rate-div col-md-2">
                      <span className="fa fa-star fa" />
                      <span className="fa fa-star fa" />
                      <span className="fa fa-star fa" />
                      <span className="fa fa-star fa" />
                      <span className="fa fa-star fa" />
                    </span>
                  </span>
                  <span className="a">{Review.rate}</span>
                </p>
              );
            })}
          </div>
          <div id="back-link">
            <Link to="/" id="back-link">
              Back
            </Link>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Details;
