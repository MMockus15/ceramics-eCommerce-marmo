import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-color: #f4ede8;
  padding: 50px;
`;

const Card = styled.div`
  background-color: #332e2c;
  color: #e1c8ab;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 20px;
`;

const CardImg = styled.img`
  height: 500px;
  object-fit: cover;
`;

const CardTitle = styled.h5`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  margin-top: 50px;
`;

const CardText = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  margin: 20px 0;
`;

const Home = () => {
  return (
    <HomeContainer>
      <div className="hero border-1 pb-3">
        <Card className="card">
          <CardImg
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <CardTitle>New Season Arrivals</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </div>
          </div>
        </Card>
      </div>
    </HomeContainer>
  );
};

export default Home;
