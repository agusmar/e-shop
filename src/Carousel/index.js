import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Carousel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="carousel">
        {this.props.products.map((data) => {
          console.log(data.id)
          return (
            <Link to={`/producto/${data.id}`}>
              <div className="card">
                <div className="thumbnail">
                  <img src={data.thumbnail} />
                </div>
                <div className="price">
                  {data.price}
                </div>
                <div className="title">
                  {data.title}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    );
  }
}
export default Carousel;
