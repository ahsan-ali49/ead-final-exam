import { Container, Row } from "react-bootstrap";
import footerpic1 from "../assets/images/footerpic1.png";
import footerpic2 from "../assets/images/footerpic2.png";
import footerpic3 from "../assets/images/footerpic3.png";
import footerpic4 from "../assets/images/footerpic4.png";

export default function Footer() {
  return (
    <Container className="pt-5">
      <Row className="mt-5 pt-5">
        <div className="col-3">
          <h6>COMPANY INFO</h6>
          <ul style={{ listStyle: "none" }} className="ps-0">
            <li>About Us</li>
            <li>Latest Posts</li>
            <li>Contact Us</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="col-3">
          <h6>HELP LINKS</h6>
          <ul style={{ listStyle: "none" }} className="ps-0">
            <li>Tracking</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Shipping Info</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="col-3">
          <h6>USEFUL LINKS</h6>
          <ul style={{ listStyle: "none" }} className="ps-0">
            <li>Special Offers</li>
            <li>Gift Cards</li>
            <li>Advetising</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="col-3">
          <h6>GET IN THE KNOW</h6>
          <input
            type="email"
            placeholder="Enter email"
            style={{
              borderTop: "0",
              borderRight: "0",
              borderLeft: "0",
              borderBottom: "3px solid black",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="black"
            class="bi bi-arrow-right-short"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
            />
          </svg>
        </div>
      </Row>
      <Row className="mt-5 no-wrap">
        <div className="col-lg-6 col-sm-12">
          <p>© 2020 FasTech Systems Private Limited Sukkur. </p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="col col-lg-1 col-sm-3 col-md-3">
          <img src={footerpic1} alt="logo" />
        </div>
        <div className="col col-lg-1 col-sm-3 col-md-3">
          <img src={footerpic2} alt="logo" />
        </div>
        <div className="col col-lg-1 col-sm-3 col-md-3">
          <img src={footerpic3} alt="logo" />
        </div>
        <div className="col col-lg-1 col-sm-3 col-md-3">
          <img src={footerpic4} alt="logo" />
        </div>
      </Row>
    </Container>
  );
}
