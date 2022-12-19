import React from "react";
import { Link, Navigate } from "react-router-dom";
import { Container, Text } from "@chakra-ui/react";
import { Box, Image, Input } from "@chakra-ui/react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AuthContextProvider";
const Register = () => {
  const [init, setInit] = React.useState("");
  const [arr, setArr] = React.useState({});
  const { isAuth, token, Logout, login } = React.useContext(AppContext);

  localStorage.setItem("item", JSON.stringify(arr));
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInit({ ...init, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setArr({ ...arr, init });
    login();
  };
  React.useEffect(() => {
    alert("hii You can registerd from here ");
  }, []);
  if (isAuth) {
    return <Navigate to="/" />;
  }
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
        <div 
         
      >
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
            display: "fixed",
            margin: "155px 0px 0px 40px",
            background: "#fff",
            border: "1px dashed #d3e1ea",
            borderRadius: "20px 14px",
            padding: "65px 32px 32px",
            position: "relative",
            height:"200px"

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
                className="resman-icon resman-icon-tick"
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
                className="resman-icon resman-icon-tick"
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
                className="resman-icon resman-icon-tick"
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
                margin: "60px 40px",
                fontSize: "32px",
              }}
            >
              Find a job &amp; grow your career
            </h1>
            <form>
              <label
                style={{
                  color: "#445578",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                Full Name
              </label>
              <Input
                type="text"
                placeholder="What is your name ?"
                onChange={handleChange}
                name="nameofemployee"
              />
              <label
                style={{
                  olor: "#445578",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                Email id
              </label>
              <Input
                type="email"
                onChange={handleChange}
                placeholder="Tell us your Email ID"
                name="email"
              />
              <label
                style={{
                  olor: "#445578",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                Password
              </label>
              <Input
                onChange={handleChange}
                type="password"
                placeholder="Create a password for your account"
                name="password"
              />
              <label
                style={{
                  olor: "#445578",
                  fontWeight: "600",
                  fontSize: "13px",
                  lineHeight: "18px",
                }}
              >
                Mobile Number
              </label>
              <Input
                onChange={handleChange}
                type="number"
                placeholder="+91 Mobile Number"
                name="mobilenumber"
              />
            </form>
            <Box
              style={{
                display: "flex",
              }}
            >
              <Box
                style={{
                  width: "50%",
                  marginTop: "10px",

                  display: "flex",
                  position: "relative",
                  cursor: "pointer",
                  color: " #457eff",
                  border: "1px solid #d3e1ea",
                  background: " #fff",
                  display: "-webkit-box",
                  display: "-ms-flexbox",

                  padding: " 14px 12px",
                  borderRadius: "20px 8px",
                }}
              >
                <Box tabIndex="0" data-val="exp">
                  <i className="main-4 selectedTick resman-icon resman-icon-tick"></i>
                  <Box className="iconWrap">
                    <i className="main-6 resman-icon resman-icon-briefcase"></i>
                  </Box>
                  <Box
                    style={{
                      marginTop: "3px",
                    }}
                  >
                    <h2
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      I'm Experienced
                    </h2>
                    <p
                      style={{
                        color: "#8292b4",
                      }}
                    >
                      {" "}
                      I have work experience (excluding internships)
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box
                style={{
                  display: "flex",
                  position: "relative",
                  cursor: "pointer",
                  color: " #457eff",
                  border: "1px solid #d3e1ea",
                  background: " #fff",
                  display: "-webkit-box",
                  display: "-ms-flexbox",
                  width: "50%",
                  padding: " 14px 12px",
                  borderRadius: "20px 8px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              >
                <Box tabIndex="0" data-val="exp">
                  <i className="main-4 selectedTick resman-icon resman-icon-tick"></i>
                  <Box className="iconWrap">
                    <i className="main-6 resman-icon resman-icon-briefcase"></i>
                  </Box>
                  <Box
                    style={{
                      marginTop: "3px",
                    }}
                  >
                    <h2
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      I'm Fresher
                    </h2>
                    <p
                      style={{
                        color: "#8292b4",
                      }}
                    >
                      {" "}
                      I am student and haven't work after graduation
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
            <p
              style={{
                display: "block",
                fontSize: "13px",
                lineHeight: "18px",
                fontWeight: "600",
                color: "#445578",
                marginBottom: "8px",
                marginLeft: "-450px",
              }}
            >
              Resume
            </p>
            <Box
              style={{
                borderRadius: "28px",
                padding: "0",
                marginLeft: "-350px",
              }}
            >
              <Box
                style={{
                  boxSizing: "border-Box",
                }}
              >
                <button
                  style={{
                    background: "#ff7555",
                    borderRadius: "28px",
                    fontWeight: "600",
                    padding: "8px 40px",
                  }}
                  type="button"
                >
                  Upload Resume
                </button>
              </Box>
              <Box>
                <p
                  style={{
                    color: "#8292b4",
                    marginTop: " 0",
                    fontSize: "11px",
                    lineHeight: "14px",
                    width: "-webkit-fit-content",
                    width: "-moz-fit-content",
                    width: "fit-content",
                    paddingRight: " 12px",
                  }}
                >
                  DOC, DOCx, PDF, RTF | Max: 2 MB
                </p>
                <Box
                  style={{
                    marginTop: "20px",
                    fontSize: "13px",
                    display: "inline-block",
                    marginLeft: "140px",
                  }}
                >
                  Recruiters give first preference to candidates who have a
                  resume
                </Box>
              </Box>

              <Button
                style={{
                  marginTop: "30px",
                  backgroundColor: " #d3e1ea",
                  borderRadius: "23px",
                }}
                type="submit"
                disabled=""
                onClick={handleSubmit}
              >
                Register Now
              </Button>
            </Box>
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
              marginLeft: "20px",
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
              className="orWrap main-1"
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
