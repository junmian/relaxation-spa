import styled from "styled-components";

const PriceCard = styled.div`
  width: 100%;
  height: 34px;
  p {
    text-align: center;
    font-size: 1.3rem;
  }
`;

const TotalCost = (props) => {
  return (
    <PriceCard>
      <p className="subTotal">
        {props.charge} ${props.count}
      </p>
    </PriceCard>
  );
};

export default TotalCost;
