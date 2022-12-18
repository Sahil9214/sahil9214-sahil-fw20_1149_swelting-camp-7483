import React from "react";
import { Text } from "@chakra-ui/react";
import Carousel from "./Carousels";
import Carousel2 from "./Carousels2";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import Discovery from "./Discovery";
import Carousels3 from "./Carousels3";
import SponserComapny from "./SponserComapny";
import GrowYour from "./GrowYour";
const TopCompanies = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <Text
          style={{
            fontSize: "27px",
            lineHeight: "40px",
            textAlign: "center",
            fontWeight: " bold",
            color: "#1B2437",
          }}
        >
          Top comapnies Hiring Now
        </Text>
      </div>
      <div>
        <Carousel />
        <Carousel2 />
        <Link to="/viewallcomapny">
          <div
            style={{
              marginTop: "80px",
            }}
          >
            <Button
              style={{
                border: "1px solid #88ADFF",
                borderRadius: "100px",
                fontSize: " 17px",
                fontWeight: "600",
                padding: "12px 20px",
                color: "#457EFF",
                lineHeight: "24px",
              }}
            >
              View All Comapny
            </Button>
          </div>
        </Link>
      </div>
      <Carousels3/>
      <SponserComapny/>
      <div style={{marginTop:"50px"}}>
        <GrowYour/>
      </div>
      <div style={{
        marginTop:"40px"
      }}>
        <img src="https://user-images.githubusercontent.com/106021674/208147968-3a7a8e56-1c4e-46f2-93ea-1838fdcc286d.png" alt="image" />
      </div>
      <div
      style={{
        marginTop:"40px"
      }}
      >
        <img src="https://user-images.githubusercontent.com/106021674/208294214-c6e24697-a0e8-4e8a-933f-80787f96f2ba.png" alt="img" />
      </div>
    </div>
  );
};

export default TopCompanies;
