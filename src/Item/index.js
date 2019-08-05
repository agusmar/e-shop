import React from 'react';
import './style.css';
import Image from '../Image';
import Title from '../Title';
import Price from '../Price';
import BuyBox from '../BuyBox';
import Sold from '../Sold';


class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    };
  }

  async componentDidMount() {

    const response = await fetch(`https://api.mercadolibre.com/items/${this.props.match.params.id}`);
    const responseJson = await response.json();

    console.log("hola", responseJson)
    this.setState({
      data: responseJson
    })
  }
  
  render() {
    return (
      <div className="item">
        <div className="img-container">
        <Image img={this.state.data.thumbnail} />    
        </div>
        <div>
        <Sold soldQuantity={this.state.data.sold_quantity} />
        <Title title={this.state.data.title}/>
        <Price price={this.state.data.price}/>
        <BuyBox />
        </div>
      </div>
    );
  }
}
export default Item;