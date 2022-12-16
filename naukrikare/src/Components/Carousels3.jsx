import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Text } from "@chakra-ui/react";
// import required modules
import { Pagination } from "swiper";

let arr = [
  {
    name: "Full Stack Developer",
    title: "23.7k+ Jobs",
  },
  {
    name: "Mobile /App Deveoper",
    title: "3K+ Jobs",
  },
  {
    name: "Front End Developer",
    title: "3.9K Jobs",
  },
  {
    name: "DevOps Engineer",

    title: "2K+ jobs",
  },
  {
    name: "Engineering Manager",
    title: "988 jobs",
  },
  {
    name: "Technical LEad",
    title: "13.5k+ jobs",
  },
];

const Carousels3 = () => {
  return (
    <div
      className="card-container"
      style={{
        position: " relative",
        height: "366px",
        borderRadius: "26px 6px 26px 6px",
        marginBottom: " 26px",
        background: "#fef9f4",
        width: "80%",
        margin: "auto",
        marginTop: "140px",
      }}
    >
      <div
        className="leftcard"
        style={{
          position: "absolute",
          width: "420px",
          paddingLeft: "107px",
          paddingTop: "57px",
        }}
      >
        <img
          style={{
            height: "103px",
            width: "auto",
          }}
          src="https://static.naukimg.com/s/0/0/i/role-collection.png"
          alt="naukri role-collection"
        />
        <p
          style={{
            width: " 275px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "27px",
            lineHeight: "40px",
            color: "#1b2437",
          }}
        >
          Discover jobs across popular roles
        </p>
        <p>Select a role and we'll show you relevant jobs for it!</p>
      </div>
      <div
        className="right card"
        style={{
          top: "-34px",
          left: "420px",
          position: "relative",
          height: "424px",
          width: "592px",
          background: " #ffffff",
          border: "1px solid #eaf1f5",
          borderRadius: " 16px 6px",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          boxShadow: " 0px 4px 10px rgb(0 77 255 / 4%)",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            23.7k+ jobs
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            3k+ jobs
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            3.9k +jobs
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            zIndex: "2",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            2k+ jobs
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            zIndex: "2",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            988 Jobs
          </p>
        </div>
        <div
          style={{
            cursor: "pointer",
            width: " 234px",
            height: " 84px",
            background: "#ffffff",
            border: "1px solid #eaf1f5",
            borderRadius: " 16px 6px",
            marginLeft: "20px",
            marginTop: "20px",
            zIndex: "2",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
          }}
        >
          <Text
            style={{
              textOverflow: "ellipsis",
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "20px",
              color: "#1b2437",
              display: "block",
              maxWidth: "194px",
              overflow: " hidden",
              whiteSpace: " nowrap",
            }}
          >
            Full Stack Developer
          </Text>
          <p
            style={{
              fontWeight: " normal",
              marginTop: "2px",
              fontSize: "13px",
              lineHeight: " 20px",
              color: "#8292b4",
            }}
          >
            13.5k+ Jobs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousels3;
