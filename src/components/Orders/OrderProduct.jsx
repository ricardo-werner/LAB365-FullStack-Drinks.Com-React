import React from "react";

export class OrderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.item };
  }

  render() {
    const { item } = this.props;
    console.log(item);

    console.log(this.state);

    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
      </tr>
    );
  }
}
