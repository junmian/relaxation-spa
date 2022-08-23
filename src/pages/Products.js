import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "styled-components";
import Oil from "../assets/lavender-oil.png";
import Mask from "../assets/face-mask-cream.jpg";
import Salt from "../assets/epsom-salts.jpg";
import Lotion from "../assets/lotion.jpeg";
import TotalCost from "../components/TotalCost";

const ProductImage = styled.img`
  max-width: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  transition: 0.3s;
  :hover {
    transform: rotate(2deg);
    transition: 0.3s ease-in-out;
  }

  border: ${(props) => {
    if (props.border === "orange") {
      return "5px solid orange";
    }
    if (props.border === "gold") {
      return "5px solid gold";
    }
    if (props.border === "purple") {
      return "5px solid purple";
    }
    if (props.border === "green") {
      return "5px solid green";
    }
    return "grey";
  }};
`;

const Products = () => {
  // Declare a new state variable called "count"
  const [count, setCount] = useState(0);

  // Function to increment count by 7 for Lavender Oil
  const handleOilClick = () => {
    setCount(count + 7);
  };

  // Function to increment count by 12 for Face Mask
  const handleMaskClick = () => {
    setCount(count + 12);
  };
  // Function to increment count by 15 for Epsom Salt
  const handleSaltClick = () => {
    setCount(count + 15);
  };
  // Function to increment count by 20 for Aloe Vera Lotion
  const handleLotionClick = () => {
    setCount(count + 20);
  };

  return (
    <div>
      <h2>Products</h2>
      <h3>Try some of our best sellers</h3>
      <h4>(Tax Exclusive)</h4>

      <div className="container overflow-hidden">
        <div className="row">
          
          {/* Lavender Oil */}
          <div className="col-6">
            <div className="p-3">
              <Card>
                <h3>Lavender Oil: $7</h3>
                <ProductImage src={Oil} className="img-fluid" border="orange" alt="Lavender Oil" />
                <br></br>
                <br></br>
                <Button color="green" onClick={handleOilClick}>
                  Add
                </Button>
              </Card>
            </div>
          </div>

          {/* Face Mask */}
          <div className="col-6">
            <div className="p-3">
              <Card>
                <h3>Face Mask: $12</h3>
                <ProductImage src={Mask} className="img-fluid" border="gold" alt="Face Mask" />
                <br></br>
                <br></br>
                <Button color="green" onClick={handleMaskClick}>
                  Add
                </Button>
              </Card>
            </div>
          </div>

          {/* Epsom Salt */}
          <div className="col-6">
            <div className="p-3">
              <Card>
                <h3>Epsom Salt: $15</h3>
                <ProductImage
                  src={Salt}
                  className="img-fluid"
                  border="purple"
                  alt="Lavender Epsom Salt"
                />
                <br></br>
                <br></br>
                <Button color="green" onClick={handleSaltClick}>
                  Add
                </Button>
              </Card>
            </div>
          </div>

          {/* Aloe Vera Lotion */}
          <div className="col-6">
            <div className="p-3">
              <Card>
                <h3>Aloe Vera Lotion: $20</h3>
                <ProductImage
                  src={Lotion}
                  className="img-fluid"
                  border="green"
                  alt="Aloe Vera Lotion"
                />
                <br></br>
                <br></br>
                <Button color="green" onClick={handleLotionClick}>
                  Add
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <TotalCost charge="Subtotal:" count={count.toFixed(2)} />
      <TotalCost charge="Total:" count={(count * 1.13).toFixed(2)} />
    </div>
  );
};

export default Products;
