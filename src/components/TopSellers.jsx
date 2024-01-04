import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useExamContext } from "../context/FinalExamContext";

export const TopSellers = () => {
  const { products } = useExamContext();

  return (
    <Container className="text-center mt-5">
      <h1>Top Sellers</h1>
      <h6>Browse our top-selling products</h6>
      <Row className="mt-5">
        {products.slice(0, 4).map((product) => {
          return (
            <Card className="col-lg-3 border-0">
              <Card.Img src={product.image} style={{ maxHeight: "50%" }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <span>{"$" + product.price}</span>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
      <Button className="bg-primary rounded-0 btn-sm">SHOP NOW</Button>
    </Container>
  );
};
