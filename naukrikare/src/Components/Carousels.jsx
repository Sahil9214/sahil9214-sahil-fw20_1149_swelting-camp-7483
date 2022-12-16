import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Text } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { ChevronRightIcon } from "@chakra-ui/icons";

function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        style={{ width: "80%", margin: "auto" ,marginTop:"30px"}}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>MNC</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              1.4+ are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/4961323.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/3705432.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/1750266.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/277916.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Hospatility</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              28 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/4260478.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/70726.gif	"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/79172.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/213378.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Banking & Finance</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              151 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/4630969.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/1503284.gif	"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/405864.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/2193008.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Product</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              736 are activeely hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/4597319.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/30928.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/3989906.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/1495796.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        {/* //next page */}

        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Startup</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              276 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/1054378.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="		https://img.naukimg.com/logo_images/groups/v1/4656277.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/1440986.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/4315976.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Edtech</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              163 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/5914168.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/4737083.gif	"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/204166.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/4669119.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>FMCG & Retail</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              38 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/4655831.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/289380.gif	"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/32956.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/5515264.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div
    
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>HealthCare</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
            124 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/526200.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/1529248.gif	"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/254826.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/18718.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "243.07px",
            marginRight: "16px",
            background: "#FFFFFF",
            padding: "0px 20px",
            border: "1px solid #EAF1F5",

            boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
            borderRadius: " 16px 6px",
            cursor: " pointer",
            height: " 152px",
            display: "-webkit-box",
            display: "-ms-flexbox",
            display: " flex",
            width: "152px",
            flexDirection: " column",

            justifyContent: "center",
            position: " relative",
          }}
        >
          <div
    
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Text>Unicorn</Text>
              <ChevronRightIcon style={{ width: "25px", height: "25px" }} />
            </div>
            <Text
              style={{
                color: "#8292B4",
                fontSize: "13px",
                lineHeight: "20px",
                fontWeight: "400",
                marginTop: "2px",
              }}
            >
              95 are actively hiring
            </Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/5729808.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="	https://img.naukimg.com/logo_images/groups/v1/2948580.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/1578030.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
              <img
                src="https://img.naukimg.com/logo_images/groups/v1/2016966.gif"
                width="40px"
                height="40px"
                style={{ marginLeft: "20px" }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Carousel;
