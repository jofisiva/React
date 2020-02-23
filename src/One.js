import React from "react";

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Dance"
    };
  }

  render() {
    const { name } = this.state;
    const { name1 } = this.props;
    return <p> I am from one :{[name, name1]} </p>;
  }
}
export default One;
