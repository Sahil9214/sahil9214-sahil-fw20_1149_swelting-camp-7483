import React from "react";
import { Pagination } from "swiper";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Text } from "@chakra-ui/react";
import Slider from "react-slick";
import Slidercarousel from "./Slidercarousel";
const GrowYour = () => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        margin: "auto",
      }}
    >
      <div
        style={{
          width: "240px",
          marginRight: " 31px",
          paddingTop: "24px",
        }}
      >
        <p
          style={{
            display: "inline-block",
            fontSize: "11px",
            lineHeight: "14px",
            padding: "8px 12px",
            borderRadius: "4px",
            background: "#F2F4FF",
            fontWeight: " 500",
            color: "#826CCE",
            marginBottom: " 10px",
            fontFamily: "Inter",
            float: "left",
          }}
        >
          By Naukri Learning{" "}
        </p>
        <p
          style={{
            fontWeight: "700",
            display: "inline-block",
            fontSize: "27px",
            lineHeight: " 34px",
            color: " #1B2437",
            fontfamily: " Inter",
          }}
        >
          Grow Your Career Through Learning
        </p>
        <img
          style={{
            width: "160px",
            marginTop: "5px",
          }}
          src="https://static.naukimg.com/s/0/0/i/learn-icon.svg"
          alt="new"
        />
      </div>
    <div>
    <Slidercarousel/>
    </div>
    
    </div>
  );
};

export default GrowYour;
