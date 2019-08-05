import React from 'react';

class Sold extends React.Component {
  render() {
    return (
        <div>
        Nuevo {this.props.soldQuantity} vendidos 
        </div>
    );
  }
}
export default Sold;