import React from 'react';
import Carousel from '../Carousel';
import Header from '../Header';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      juegos: [],
      comics: [],
      ropa: []
    }
  }

  async componentDidMount() {

    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1144&limit=4`)
    const responseJson = await response.json();

    const responseComics = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA3025&limit=4`)
    const responseJsonComics = await responseComics.json();

    const responseRopa = await fetch(`https://api.mercadolibre.com/sites/MLA/search?category=MLA1430&limit=4`)
    const responseJsonRopa = await responseRopa.json();

    this.setState({
      juegos: responseJson.results,
      comics: responseJsonComics.results,
      ropa: responseJsonRopa.results
    })
    console.log(responseJson);
  }

  render() {
    console.log(this.state.products)
    return (
      <div className="carrousel">
        <Header />
        <Carousel products={this.state.juegos} />
        <Carousel products={this.state.comics} />
        <Carousel products={this.state.ropa} />
      </div>
    );
  }
}
export default Home;

