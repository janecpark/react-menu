import React, {useContext} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ItemContext from './ItemContext'
import { Link } from "react-router-dom";

/** Displays home page */

function Home() {
  const {snacks, drinks} = useContext(ItemContext)
  
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <div className="font-weight-bold" style={{fontSize:'30px'}}>
              Welcome to Silicon Valley's premier dive cafe!
            </div>
            <br />
          <Link to="/snacks"><h4>{snacks.length} Snack Items</h4></Link>
          <Link to="/drinks"><h4>{drinks.length} Drink Items</h4></Link>
          </CardTitle>
        </CardBody>
      <Link to="/new"><button>Add an item</button></Link>
      </Card>
    </section>
  );
}

export default Home;
