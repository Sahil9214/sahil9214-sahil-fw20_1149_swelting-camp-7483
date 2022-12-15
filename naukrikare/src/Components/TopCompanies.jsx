import React from "react";
import { Text } from "@chakra-ui/react";
import Carousel from "./Carousels";
import Carousel2 from "./Carousels2";
import { Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"
import Discovery from "./Discovery";
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
      <Discovery/>
    </div>
  );
};

export default TopCompanies;
