import React, { useState } from "react";
import Card from "../components/Card";
import styled from "styled-components";
import Button from "../components/Button";
import Massage from "../assets/massage.jpg";
import Manicure from "../assets/manicure.webp";
import Pedicure from "../assets/pedicure.jpg";
import TotalCost from "../components/TotalCost";

const ProductImage = styled.img`
  max-width: auto;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 5px 5px 15px 5px #000000;
  transition: 0.5s;
  :hover {
    transform: rotate(2deg);
    box-shadow: 5px 5px 15px 5px #267326;
    transition: 0.5s;
  }
`;

const StyledText = styled.p`
  margin: 0 5px 0 5px;
`;

const Services = () => {
  // Declare a new state variable called "count"
  const [count, setCount] = useState(0);

  // Function to increment count by 85 for the massage service
  const handleMassageClick = () => {
    setCount(count + 85);
  };

  // Function to increment count by 45 for the pedicure service
  const handlePedicureClick = () => {
    setCount(count + 45);
  };
  // Function to increment count by 35 for the manicure service
  const handleManicureClick = () => {
    setCount(count + 35);
  };

  return (
    <div className="container-fluid">
      <h2>Services</h2>
      <h3>Select one or more of our relaxing services...</h3>
      <h4>(Tax Inclusive)</h4>

      {/* Set up a bootstrap grid system*/}
      <div className="row">
        <div className="col py-3">
          {/* Set up versatile reusable Card and Button components */}
          <Card>
            {/* Massage */}
            <h3>Massage: $85</h3>
            <ProductImage src={Massage} className="img-fluid" alt="Massage" />
            <br></br>
            <br></br>
            <StyledText>
              Resting comfortably on a massage table, our masseur uses hands-on techniques to treat
              muscular conditions and to help relieve muscle pain, stiffness, and tension.
            </StyledText>
            <br></br>
            <StyledText>
              Whether you want to relieve sore muscles or simply looking to relax and unwind, a
              massage is the perfect gift that your body will thank you for.
            </StyledText>

            <Button color="green" onClick={handleMassageClick}>
              Add
            </Button>
            
          </Card>
        </div>

        {/* Pedicure */}
        <div className="col py-3">
          <Card>
            <h3>Pedicure: $45</h3>
            <ProductImage src={Pedicure} className="img-fluid" alt="Pedicure" />
            <br></br>
            <br></br>
            <StyledText>
              Our spa pedicure involves a 3-step process that cleans, scrubs, and paints toenails:
            </StyledText>
            <br></br>

            <ol>
              <li>
                A warm foot soak in fragrant epsom salt to help soften and relax muscles and
                toenails.
              </li>
              <li>
                A gentle scrub to help exfoliate the skin, resulting in a soft and renewed feeling
                of the skin.
              </li>
              <li>Filing, shaping, cutting, and applying nail product to toenails</li>
            </ol>

            <Button color="green" onClick={handlePedicureClick}>
              Add
            </Button>
          </Card>
        </div>

        {/* Manicure */}
        <div className="col py-3">
          <Card>
            <h3>Manicure: $35</h3>
            <ProductImage src={Manicure} className="img-fluid" alt="Manicure" />
            <br></br>
            <br></br>
            <StyledText>
              Enjoy our signature cosmetic beauty treatment for your hands. It includes:
            </StyledText>
            <br></br>

            <ol>
              <li>
                A warm hand soak in fragrant epsom salt to help soften and relax muscles and
                fingernails.
              </li>
              <li>
                A gentle scrub to help exfoliate the skin, followed by a hand massage to further
                relax muscles.
              </li>
              <li>Filing, shaping, cutting, and applying nail product to fingernails. </li>
            </ol>

            <Button color="green" onClick={handleManicureClick}>
              Add
            </Button>
          </Card>
        </div>
      </div>
      <TotalCost charge="Total:" count={count.toFixed(2)} />
    </div>
  );
};

export default Services;
