import axios from "axios";
import { useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { BASE_URL_EXAM, APIs } from "../const/APIs";
import { useExamContext } from "../context/FinalExamContext";
import { useNavigate } from "react-router-dom";

export default function AllProducts() {
  const { products, setProducts } = useExamContext();

  const navigate = useNavigate();

  const fetchAllProducts = async () => {
    await axios
      .get(BASE_URL_EXAM + APIs.GET_ALL_PRODUCTS + "?limit=8")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Container className="text-center pt-5">
      <h1>Discover NEW Arrivals</h1>
      <h6>Recently added shirts!</h6>
      <Row>
        {products.map((product) => {
          return (
            <Card
              className="col-lg-3 border-0"
              onClick={() => navigate("/productDetail/" + product.id)}
            >
              <Card.Img src={product.image} style={{ maxHeight: "50%" }} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <span>{"$" + product.price}</span>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}
