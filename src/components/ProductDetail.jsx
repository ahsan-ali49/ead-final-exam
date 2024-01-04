import React, { useEffect, useState, useRef } from "react";
import { Badge, Button, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useExamContext } from "../context/FinalExamContext";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { products } = useExamContext();
  const requiredProduct = products[productId - 1];
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const { cartItems, setCartItems } = useExamContext();
  const ref = useRef(null);
  const [isInCart, resetCart] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setTotal(total + Math.round(requiredProduct.price));
  };
  const handleDecrement = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(quantity);
    total > 0
      ? setTotal(total - Math.round(requiredProduct.price))
      : setTotal(0);
  };

  const handleCartItems = (e) => {
    if (!isInCart) {
      resetCart(!isInCart);
      setCartItems(cartItems + 1);
    }
  };

  useEffect(() => {
    console.log(products);
  }, []);

  return (
    <Container className="mb-5">
      <div className="row">
        <Badge className="col-lg-1 bg-primary ps-0 pe-0 ms-auto">
          {cartItems}
        </Badge>
      </div>
      <Row>
        <div className="col-lg-4">
          <img
            src={requiredProduct.image}
            alt="product"
            className="w-75 h-75"
          />
        </div>
        <div className="col-lg-8 pt-4">
          <h3>{requiredProduct.title}</h3>
          <h6 className="pt-4 pb-4">PKR {requiredProduct.price}</h6>
          <h6>{requiredProduct.category}</h6>
          <h6 className="pt-0 mt-0">QUANTITY: </h6>
          <Button
            className="bg-transparent rounded-0 mt-0 pt-1 pb-0 text-black btn-md border-black bt-1"
            onClick={() => handleDecrement()}
          >
            -
          </Button>
          <input
            className="mt-0 pt-0 pb-1 text-center"
            placeholder="0"
            value={quantity}
            style={{ maxWidth: "5rem" }}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
          <Button
            className="bg-transparent rounded-0 mt-0 pt-1 pb-0 text-black btn-md border-black"
            onClick={() => handleIncrement()}
          >
            +
          </Button>
          <Button
            className="bg-black text-light ps-5 pe-5 ms-5 rounded-0 border-0"
            ref={ref}
            onClick={(e) => handleCartItems(e)}
          >
            ADD TO CART
          </Button>
          <h6 className="mt-5">Subtotal: PKR {total}</h6>
        </div>
      </Row>
      <Row>
        <h2>DESCRIPTION:</h2>
        <p>{requiredProduct.description}</p>
      </Row>
    </Container>
  );
};
