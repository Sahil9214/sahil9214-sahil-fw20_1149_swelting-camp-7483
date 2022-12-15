import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Text, Button } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function Carousel2() {
  return (
    <>
   
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          style={{
            width: "80%",
            margin: "auto",
            justifyContent: "center",
            alignItem: "center",
            marginTop: "100px",
            zIndex:'2',
            border:"1px solid #fff"
            
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="https://img.naukimg.com/logo_images/groups/v2/214440.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text>Reliance Retails</Text>
            </div>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.1
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                16.4K+ reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="	https://img.naukimg.com/logo_images/groups/v2/419316.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                Synechron
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Information Technology and Company
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.1
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                16.4K+ reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="		https://img.naukimg.com/logo_images/groups/v2/2436002.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                Xoriant
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Software amd development and Technology
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.1
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                16.4K+ reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="https://img.naukimg.com/logo_images/groups/v2/315118.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                Datamatics
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Global development and Technology service film
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                3.7
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                13.7K+ reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>

          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="https://img.naukimg.com/logo_images/groups/v2/4264.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                WNS Holding
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Global development and Technology service film
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                3.2
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                7.2K+ reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="https://img.naukimg.com/logo_images/groups/v2/4654342.gif
              "
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                Cbts
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Leading Technology and Provider
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.4
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                36 reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="	https://img.naukimg.com/logo_images/groups/v2/240936.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                JP Morgan
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Leading in Financing service
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.8
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                98 reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="	https://img.naukimg.com/logo_images/groups/v2/135332.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                MU sigma
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              We are data analytics & decision science company
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                4.8
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                98 reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              maxWidth: " 300px",
              marginTop: "unset",
              justifyContent: "center",
              boxShadow: "0px 8px 20px rgb(0 73 203 / 12%)",
              height: "400px",
            }}
          >
            <div>
              <img
                style={{
                  margin: "auto",
                }}
                src="https://img.naukimg.com/logo_images/groups/v2/4577755.gif"
                alt="Reliance Retail"
              />
            </div>
            <div
              style={{
                padding: "16px",
                borderRadius: " 12px 6px",

                backgroundColor: "rgba(238,28,46,.03)",
                justifyContent: "center",
                height: " 92px",
                width: "70%",
                margin: "auto",
                marginTop: "18px",
              }}
            >
              <Text
                style={{
                  color: "#1B2437",
                }}
              >
                Accolite Digital
              </Text>
            </div>
            <p
              style={{
                textOverflow: "ellipsis",
                overflow: " hidden",
                color: "#8292B4",
                textAlign: "center",
              }}
            >
              Digital Transformation and service Provider
            </p>
            <div
              style={{
                color: " #8292B4",
                position: "relative",
                margin: "auto",
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <span style={{ top: "2px" }}>
                <img
                  style={{
                    width: "12px",
                    height: "12px",
                  }}
                  src="//static.naukimg.com/s/7/0/assets/images/node_modules/@naukri-ui-dev/premiumstandardads/component/assets/star.0f830ab5.svg"
                  alt="rating"
                />
              </span>
              <span
                style={{
                  paddingRight: " 6px",
                  borderRight: "1px solid #D3E1EA",
                  marginRight: "6px",
                  fontWeight: "600",
                  marginLeft: "18px",
                }}
              >
                3.9
              </span>
              <span
                style={{
                  fontSize: "13px",
                  lineHeight: "14px",
                }}
              >
                360 reviews
              </span>
            </div>
            <div
              style={{
                marginTop: "15px",
                textAlign: " center",
              }}
            >
              <Button
                style={{
                  padding: "11px 20px",
                  color: "#457EFF",
                  fontWeight: "600",
                  backgroundColor: "#F1F5FF",
                  display: "inline-block",
                  borderRadius: " 27px",
                  marginTop: "30px",
                }}
              >
                View Jobs
              </Button>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div style={{
            marginTop:""
        }}>
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
            View All Comapnies
          </Button>
        </div> */}
      
    </>
  );
}
export default Carousel2;
