import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";


/** Displays snack or drink items with provided id*/

function Item({ menuItems, cantFind }) {
  const { id } = useParams();
  
  let items = menuItems.find(items => items.id === id);
  if (!items) return <Redirect to={cantFind} />;

  return (  
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {items.name}
          </CardTitle>
          <CardText className="font-italic">{items.description}</CardText>
          <p>
            <b>Recipe:</b> {items.recipe}
          </p>
          <p>
            <b>Serve:</b> {items.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Item;
