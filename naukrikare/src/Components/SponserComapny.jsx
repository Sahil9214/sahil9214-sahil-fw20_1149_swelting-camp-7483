import React from "react";
import { Text } from "@chakra-ui/react";
import styles from "../CssFiles/SponserCompany.module.css";
import { Divider } from "@chakra-ui/react";
const SponserComapny = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        marginTop: "40px",
      }}
    >
      <Text
        style={{
          textAlign: "Center",
          fontWeight: "bold",
          fontSize: "27px",
          lineHeight: "40px",
          margin: "10px",
        }}
      >
        Sponsored comapnies
      </Text>
      <div
        className={styles.btn2}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: " #1B2437",
            borderRadius: "50px",
            padding: "7px 20px",
          }}
        >
          All
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          IT Services
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          Technology
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          Healthcare & Life Sciences
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          Manufacturing & Production
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          BFSI
        </button>
        <button
          className={styles.btn2}
          style={{
            border: " 1px solid #FFBFAD",
            fontWeight: "600",
            color: "black",
            borderRadius: "50px",
            marginLeft: "10px",
            padding: "7px 20px",
          }}
        >
          +5 more
        </button>
      </div>
      <div
        style={{
          marginTop: "30px",
          boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
        }}
      >
        <img
          style={{}}
          src="https://user-images.githubusercontent.com/106021674/208091294-6053c215-6119-44d4-ad9f-4bfbf40d718e.png"
          alt="photo"
        />
      </div>
      <div>
        {/* ///next part start here */}
        <div
          data-label="by AmbitionBox"
          style={{
            position: "relative",
            background: "#ffffff",
            display: "grid",
            width: "1098px",
            height: "420px",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              gridColumnStart: 1,
              width: "232px",
            }}
          >
            <h3
              style={{
                width: "232px",
                marginTop: " 97px",
                fontWeight: "bold",
                fontSize: "27px",
                lineHeight: "34px",
                color: " #1b2437",
              }}
            >
              Prepare for your next interview
            </h3>
            <div
              style={{
                marginTop: " 26px",
              }}
            >
              <img
                style={{
                  height: "153px",
                  width: "auto",
                }}
                src="https://static.naukimg.com/s/0/0/i/ab-interview.png"
                class="ab-img"
                alt="naukri ab interview"
              />
            </div>
          </div>
          <div
            className="two"
            style={{
              gridColumnStart: 2,
              width: "522px",
              height: "414px",
              background: "#ffffff",
              border: "1px solid #eaf1f5",
              borderRadius: " 16px 4px",
              webkitBoxShadow: "0px 4px 10px rgb(2 2 3 / 4%)",
              boxShadow: "0px 4px 10px rgb(2 2 3 / 4%)",
              textAlign: "center",
            }}
          >
            <p
              style={{
                paddingTop: "28px",
                paddingBottom: " 24px",
                fontWeight: "600",
                fontSize: "19px",
                lineHeight: "26px",
                textAlign: "center",
                color: "#1b2437",
              }}
              class="card-heading"
            >
              Interview questions by company
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "20px",
              }}
            >
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="	https://static.naukimg.com/s/0/0/i/ambitionbox-comp/tcs.png"
                      width="40px"
                      height="40px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      TCS
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      2.5k+ interviews
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/amazon.png"
                      width="40px"
                      height="40px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      Amazon
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      2.5k+ interviews
                    </p>
                  </div>
                </div>
              </div>
              {/* {third one} */}
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/accenture.png"
                      width="40px"
                      height="40px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      Accenture
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      2.8k+ interviews
                    </p>
                  </div>
                </div>
              </div>
              {/* fourthOne */}
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="	https://static.naukimg.com/s/0/0/i/ambitionbox-comp/cognizant.png"
                      width="40px"
                      height="40px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      Cognizant
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      1.5k+ interviews
                    </p>
                  </div>
                </div>
              </div>
              {/* fifth one */}
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/byjus.png"
                      width="30px"
                      height="30px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      BYJUS
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      812 reviews
                    </p>
                  </div>
                </div>
              </div>
              {/* sixth One */}
              <div>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    paddingTop: "16px",
                    paddingLeft: "18px",
                    width: "224px",
                    margin: "0px 8px 16px 8px",
                    height: "76px",
                    background: " #ffffff",
                    border: "1px solid #eaf1f5",
                    borderRadius: "16px 6px",
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      height: "44px",
                      width: "44px",
                      verticalAlign: "middle",
                      justifyContent: "center",
                      alignContent: "center",
                      float: "left",
                    }}
                  >
                    <img
                      style={{
                        float: "left",
                        marginLeft: "-50px",
                      }}
                      src="https://static.naukimg.com/s/0/0/i/ambitionbox-comp/flipkart.png"
                      width="30px"
                      height="30px"
                      alt="tcs"
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        display: "flex",
                        textOverflow: "ellipsis",
                        fontWeight: "500",
                        fontSize: "17px",
                        lineHeight: "22px",
                        color: "#1b2437",
                      }}
                    >
                      Flipkart
                    </p>
                    <img
                      style={{
                        marginLeft: " 8px",
                        color: "#8292b4",
                        width: "6px",
                        height: "10px",
                      }}
                      src="//static.naukimg.com/s/7/0/assets/images/src/common/components/assets/arrow.77068bf0.png"
                      alt="arrow-icon"
                    />
                    <p
                      style={{
                        fontWeight: "normal",
                        marginTop: "2px",
                        fontSize: "13px",
                        lineHeight: " 20px",
                        color: "#8292b4",
                      }}
                    >
                      488 interviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="three"
            style={{
              gridColumnStart: "3",
              width: "310px",
              height: "416px",
              textAlign: "center",
              background: " #ffffff",
              border: "1px solid #eaf1f5",
              borderRadius: " 16px 4px",

              boxShadow: "0px 4px 10px rgb(53 54 56 / 4%)",
            }}
          >
            <p
              style={{
                paddingLeft: "28px",
                paddingRight: "28px",
                paddingtop: " 28px",
                paddingBottom: "18px",
                fontWeight: " 600",
                fontSize: "19px",
                lineHeight: "26px",
                textAlign: "center",
                color: " #1b2437",
                marginTop: "20px",
              }}
            >
              Interview questions by role
            </p>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Software Engineer
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  7.2K+ question
                </p>
              </div>
            </div>
            <br />
            <hr
              style={{
                border: "0",
                height: "1px",
                background: "#eaf1f5",
                borderRadius: "0.5px",
                marginBottom: "6px",
                marginLeft: "28px",
                marginRight: "28px",
                marginTop:"10px"
              }} />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "10px",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Bussiness Analyst
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  2.8K+ question
                </p>
              </div>
            </div>
            <hr
              style={{
                border: "0",
                height: "1px",
                background: "#eaf1f5",
                borderRadius: "0.5px",
                marginBottom: "6px",
                marginLeft: "28px",
                marginRight: "28px",
                marginTop:"10px"
              }} />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Consiltant
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  2.4K+ question
                </p>
              </div>
            </div>
            <hr
              style={{
                border: "0",
                height: "1px",
                background: "#eaf1f5",
                borderRadius: "0.5px",
                marginBottom: "6px",
                marginLeft: "28px",
                marginRight: "28px",
                marginTop:"10px"
              }} />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Financial Analyst
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  991 question
                </p>
              </div>
            </div>
            <hr
              style={{
                border: "0",
                height: "1px",
                background: "#eaf1f5",
                borderRadius: "0.5px",
                marginBottom: "6px",
                marginLeft: "28px",
                marginRight: "28px",
                marginTop:"10px"
              }} />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Sales & marketing
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  884 question
                </p>
              </div>
            </div>
            {/* <Divider style={{ marginTop: "10px" }} /> */}
            <hr
              style={{
                border: "0",
                height: "1px",
                background: "#eaf1f5",
                borderRadius: "0.5px",
                marginBottom: "6px",
                marginLeft: "28px",
                marginRight: "28px",
                marginTop:"10px"
              }}
            />
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  marginTop: "20px",
                }}
              >
                <p
                  style={{
                    maxWidth: " 150px",
                    overflow: "hidden",
                    whiteSpace: "nowrap",

                    textOverflow: "ellipsis",
                    fontWeight: " normal",
                    fontSize: "13px",
                    lineHeight: "20px",
                    color: "#1b2437",
                  }}
                >
                  Quality Manager
                </p>
                <p
                  style={{
                    fontWeight: "normal",
                    fontSize: "13px",
                    lineHeight: " 20px",
                    color: "#8292b4 ",
                    marginLeft: "10px",
                  }}
                >
                  1.4K+ question
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default SponserComapny;
