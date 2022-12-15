import React from "react";
import { Text } from "@chakra-ui/react";
import { Input, Select, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
const Part2 = () => {
  return (
    <div style={{ fontFamily: "Inter" }}>
      <div
        style={{
          margin: "52px 0 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: " 100%",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: " 35px",
            lineHeight: "50px",
            color: "#1b2437",
            marginBottom: " 6px",
            fontFamily: "Roboto Slab",
          }}
        >
          Find your dream job now
        </Text>
        <div
          style={{
            fontSize: "17px",
            lineHeight: "24px",
            color: " #8292b4",
            fontFamily: "Inter",
          }}
        >
          5 lakh+ jobs for you to explore
        </div>
      </div>
      <br />
      {/* //Input Area Select Example Enter Location Search button */}

      <div style={{ display: "flex", margin: "auto", width: "60%" }}>
        <div
          style={{
            display: "flex",

            alignItems: "center",
            padding: " 9px 50px 9px 300px",
            background: " #fff",
            border: "1.26923px solid #eaf1f5",
            boxSizing: "border-box",
            boxShadow: " 0 4px 12px rgb(86 141 187 / 12%)",
            borderRadius: "100px",
          }}
        >
          <SearchIcon style={{ marginLeft: "-250px" }} />
          <Input
            placeholder="Enter skills /designations/companies"
            htmlSize={9}
            style={{ border: "none" }}
          />

          <div
            style={{
              background: " #eaf1f5",
              borderRadius: "2.53846px",
              width: " 1px",
              height: " 28px",
            }}
          ></div>
          <div>
            <Select
              style={{ marginLeft: "4px" }}
              placeholder="Select Experience"
              size="lg"
            >
              <option value="option1">Fresher</option>
              <option value="option2">1 year</option>
              <option value="option3">2 year</option>
              <option value="option4">3 year</option>
              <option value="option5">4 year</option>
              <option value="option6">5 year</option>
            </Select>
          </div>
          <div
            style={{
              background: " #eaf1f5",
              borderRadius: "2.53846px",
              width: " 1px",
              height: " 28px",
            }}
          ></div>
          <div>
            <Input
              style={{ marginLeft: "10px" }}
              placeholder="Experience"
              htmlSize={14}
            />
          </div>
          <Button
            style={{
              color: "#fff",
              borderRadius: "50px",
              marginLeft: "40px",
              backgroundColor: "#457eff",
              boxShadow: "0 5.07692px 12.6923px rgb(69 126 255 / 10%)",
              padding: "11px 28px",
              fontSize: "19px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Search
          </Button>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          marginTop: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Remote
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            MNC
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/analytics.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Analytics
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Enginerring
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/project-management.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Projext Managment
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/hr.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            HR
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
      </div>
      {/* //ANother buttons or u can say component sections  */}
      <div style={{ width: "60%", margin: "auto", display: "flex" ,marginTop:"40px" }}>
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
            width:"220px"
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/temporary-wfh.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Temp WFH
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        {/* //Banking && */}
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/finance.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Banking &....
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        {/* Supplu chain */}
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/supplychain.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Supply chain
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        {/* software */}
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Software
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
        {/* //fresher */}
        <div
          style={{
            display: "flex",
            boxShadow: "0px 3px 6px rgb(0 77 255 / 5%)",
            justifyContent: "center",
            border: " 1px solid #EAF1F5",
            borderRadius: "16px 6px",
            background: "#FFFFFF",
            padding: "0 12px",
            alignItems: "center",
            marginRight: "14px",
            height: "64px",
          }}
        >
          <img
            class="ntc__chip-logo"
            src="https://static.naukimg.com/s/0/0/i/trending-naukri/freshers.svg"
            width="40px"
            height="40px"
            alt="Remote-img"
          />
          <span
            style={{
              fontWeight: "500",
              fontSize: "17px",
              lineHeight: "22px",
              color: " #1B2437",
              margin: "10px",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: " hidden",
              maxWidth: "95px",
            }}
          >
            Fresher
          </span>
          <ChevronRightIcon
            style={{
              width: "25px",
              height: "25px",
              position: "relative",
              // marginTop: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};
//SearchIcon
export default Part2;
