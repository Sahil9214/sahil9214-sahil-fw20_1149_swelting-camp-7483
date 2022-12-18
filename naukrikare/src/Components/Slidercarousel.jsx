import React from "react";
import { Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
const Slidercarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            color: " #445578",
            fontweight: "500",
            fontsize: "13px",
            lineHeight: "18px",
            fontfamily: "Inter",
            display: "-webkit-box",

            overflow: "hidden",

            textoverflow: "ellipsis",

            maxheight: "18px",
            alignItems:"center"
          }}
        >
          Data Science
        </div>
        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            alignItems:"center"
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
            }}
          >
            AWS
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            color: " #445578",
            fontweight: "500",
            fontsize: "13px",
            lineHeight: "18px",
            fontfamily: "Inter",
            display: "-webkit-box",

            overflow: "hidden",

            textoverflow: "ellipsis",

            maxheight: "18px",
            alignItems:"center"
          }}
        >
          Cloud Technologies
        </div>
        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            alignItems:"center"
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
          Digital Marketing
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
              justifyContent:"center",
              alignItems:"center"
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            color: " #445578",
            fontweight: "500",
            fontsize: "13px",
            lineHeight: "18px",
            fontfamily: "Inter",
            display: "-webkit-box",

            overflow: "hidden",

            textoverflow: "ellipsis",

            maxheight: "18px",
            alignItems:"center"
          }}
        >
          Programming
        </div>
        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            alignItems:"center",
          
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
             
            
            }}
          >
           Bussiness Analyst
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
            
              padding:"15px 0px"
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            alignItems:"center",
       
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
          
            }}
          >
            AWS
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
        
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            color: " #445578",
            fontweight: "500",
            fontsize: "13px",
            lineHeight: "18px",
            fontfamily: "Inter",
            display: "-webkit-box",

            overflow: "hidden",

            textoverflow: "ellipsis",
            alignItems:"center",
            maxheight: "18px",
          }}
        >
          Digital Marketing
        </div>

        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            alignItems:"center"
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
             
            }}
          >
            Stategy and LEadership
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
       
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background: "#FFFFFF",
          padding: "24px 24px 12px 24px",
          border: "1px solid #EAF1F5",
          WebkitBoxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          boxShadow: "0px 4px 10px rgb(0 77 255 / 4%)",
          borderRadius: "16px 6px",
          cursor: " pointer",
        }}
      >
        <div
          style={{
            marginTop: "5px",
            height: "139px",
            marginBottom: "10px",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "600",
              fontSize: "17px",
              lineHeight: "22px",
              maxHeight: " 56px",
              color: "#1B2437",
            }}
          >
            Data Structure Algorithms
          </Text>
          <Text
            style={{
              fontfamily: "Inter",
              display: "-webkit-box",
              fontSize: "14px",
            }}
          >
            Learn in demand AI skills like Deep learning, NLP, Computer vision
            and more for career growth across different roles.
          </Text>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slidercarousel;
