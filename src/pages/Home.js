import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeImg from "../../src/assets/home1.jpg";
import Button from "../components/Button";

const HomeHeader = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Home = () => {
  return (
    <div>
      <HomeHeader src={HomeImg} />
      <br></br>
      <br></br>
      <h1>Relaxation Spa</h1>
      <br></br>
      <p>
        Located in the downtown core of Hamilton, Ontario, we offer year-round services to induce
        relaxation and promote wellness.
      </p>
      <p>
        The key to our success over the past 7 years lies in our specialization in massages,
        pedicures, and manicures. Devoting our practice to these three key services has enabled us
        to perfect our craft, allowing our clients to enjoy the best experience possible.
      </p>
      <p>
        Whether you're feeling sore, tired, restless, or just looking to relax, visit our spa for a
        relaxing experience today!
      </p>
      <br></br>
      <Link to="/services">
        <Button color="light-blue">Book a Massage Today</Button>
      </Link>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/products">
        <Button color="teal">Buy Our Products</Button>
      </Link>
      <div>
        <br></br>
        <hr className="hr-full" />
        <div className="address-container">
          <h2>Hours of Operation</h2>
        </div>
        <div className="address-container">
          <p>
            <span className="light-bold">Monday - Friday:</span> 9:00am - 9:00pm <br></br>
            <span className="light-bold">Saturday &#38; Sunday:</span> 10:00am - 10:00pm
          </p>
        </div>
        <h2>Location</h2>
        <div className="address-container">
          <p>123 King St W, Hamilton, ON L8P 4S8</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
