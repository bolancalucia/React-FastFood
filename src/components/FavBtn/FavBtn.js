import React, { Component } from "react";
import "./FavBtn.css";

export class FavBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    };
  }

  ChangeFav(prod) {
    this.setState({ status: !this.state.status });
    if (this.state.status) this.props.favRmv(prod);
    else this.props.favAdd(prod);
  }

  render() {
    let content = "";
    if (!this.state.status)
      content = (
        <i
          onClick={() => this.ChangeFav(this.props.obj)}
          className="heart fa fa-heart-o"
          title="Favourite"
        >
        </i>
      );
    else
      content = (
        <i
          onClick={() => this.ChangeFav(this.props.obj)}
          className="heart fa fa-heart"  
          title="Favourite" 
        >
        </i>
      );
    return <div className="fav-div">{content}</div>;
  }
}

export default FavBtn;
