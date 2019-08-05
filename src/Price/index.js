import React from 'react';

class Price extends React.Component {
  render() {
    return (
      <div>
      $ {this.props.price}
      </div>
    );
  }
}
export default Price;