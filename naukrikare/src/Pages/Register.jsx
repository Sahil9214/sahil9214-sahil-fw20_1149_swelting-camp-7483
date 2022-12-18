import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { Box, Image } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const Register = () => {
  return (
    <div>
      <div
        className="Navbar"
        style={{
          justifyContent: "space-between",
          display: "flex",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="https://user-images.githubusercontent.com/106021674/208310541-9ffce0f5-b9a1-4e2b-981f-4d2d6193a516.png"
            width="180px"
            height="120px"
          />
        </div>
        <div
          style={{
            marginRight: "50px",
          }}
        >
          <Link to="/">
            <Text
              style={{
                textDecoration: "none",
              }}
            >
              Already Registered?{" "}
              <span
                style={{
                  marginLeft: "auto",
                  color: "#445578",
                }}
              >
                Login Here
              </span>
            </Text>
          </Link>
        </div>
      </div>

      {/* Second Part */}

      <Flex>
        <Box
          w="30%"
          className="left"
          style={{
            display: "sticky",
            margin: "155px 0px 0px 40px",
            background: "#fff",
            border: "1px dashed #d3e1ea",
            borderRadius: "20px 14px",
            padding: "65px 32px 32px",
            position: "relative",
          }}
        >
          <Image
            style={{
              top: "-100%",
              left: "0",
              right: "0",
              bottom: "0",
              display: "inline-block",
              margin: " auto",
              position: "absolute",
            }}
            src="https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"
          />
          <Text
            style={{
              fontWeight: "700",
              fontSize: "19px",
            }}
          >
            On registering ,You can
          </Text>
          <ul>
            <li>
              <i
                style={{
                  color: "#18c1a3",
                  position: "absolute",
                  left: " 0",
                  top: "1px",
                }}
                class="resman-icon resman-icon-tick"
              >
                <CheckIcon />
              </i>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#445578",
                }}
              >
                Build your profile and let recruiters find you
              </Text>
            </li>
            <li>
              <i
                style={{
                  color: "#18c1a3",
                  position: "absolute",
                  left: " 0",
                  top: "1px",
                }}
                class="resman-icon resman-icon-tick"
              >
                <CheckIcon />
              </i>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#445578",
                }}
              >
                Get Job postings delievred right to yopur email
              </Text>
            </li>
            <li>
              <i
                style={{
                  color: "#18c1a3",
                  position: "absolute",
                  left: " 0",
                  top: "1px",
                }}
                class="resman-icon resman-icon-tick"
              >
                <CheckIcon />
              </i>
              <Text
                style={{
                  fontSize: "13px",
                  color: "#445578",
                }}
              >
                Find a job and find your career
              </Text>
            </li>
          </ul>
        </Box>
        <Box
          w="70%"
          style={{
            padding: " 0 10% 5%",
            display: "flex",
          }}
        >
          <Box
            style={{
              width: "600px",
            }}
          >
            <h1
              style={{
                margin: "60px 0px",
              }}
            >
              Find a job &amp; grow your career
            </h1>




          </Box>
          <Box
            style={{
              width: "calc(100% - 600px)",
              display: "-webkit-box",
              display: "-ms-flexbox",
              display: "flex",
              marginTop: "135px",
              zIndex: "2",
              borderLeft: "1px solid #d3e1ea",
              height: " 224px",
              paddingTop: "88px",
            }}
          >
            <span
              style={{
                fontWeight: "600",
                color: " #445578",
                height: "33px",
                border: "1px solid #d3e1ea",
                padding: "6px 8px",
                borderRadius: "50%",
                background: " #fff",
                marginLeft: " -16px",
              }}
              class="orWrap main-1"
            >
              OR
            </span>

            <div>
              <span
                style={{
                  color: "#445578",
                  fontWeight: "600",
                }}
              >
                Continue with
              </span>
              <button
                style={{
                  margin: " 5px",
                  position: "relative",
                  textAlign: "center",
                  borderRadius: "20px",
                  padding: "7px 16px",
                }}
                type="button"
                name="google-register"
              >
                <span
                  style={{
                    border: "0",
                    position: "absolute",
                    left: "9px",
                    top: "0",
                  }}
                >
                  <img
                    style={{
                      float: "left",
                      width: "22px",
                      height: "22px",
                      margin: "7px",
                    }}
                    src="//static.naukimg.com/s/7/104/assets/images/google-icon.9273ac87.svg"
                  />
                </span>
                <span
                  style={{
                    marginLeft: "27px",
                    lineHeight: "22px",
                    fontWeight: "600",
                  }}
                >
                  Google
                </span>
              </button>
            </div>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Register;
