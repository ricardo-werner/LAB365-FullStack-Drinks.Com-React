import React, { useState } from "react";

export const Counter = () => {
  const [countObject, setCountObject] = useState({
    name: "Contador de teste",
    count: 0,
  });

  const incrementar = () => {
    setCountObject({ ...countObject, count: countObject.count + 1 });
  };

  return (
    <div>
      <p>{countObject.name}</p>
      <p>Count: {countObject.count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

// export class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "Contador de teste",
//       count: 15,
//     };
//   }

//   incrementar = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <p>{this.state.name}</p>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.incrementar}>Incrementar</button>
//       </div>
//     );
//   }
// }
