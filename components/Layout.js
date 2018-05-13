import React from "react";
import Header from "./Header";
import { Container } from "semantic-ui-react";

export default props => {
  return (
    <div>
      <Container>
        <Header />
        {props.children}
        <h1>Im a footer</h1>
      </Container>
    </div>
  );
};
