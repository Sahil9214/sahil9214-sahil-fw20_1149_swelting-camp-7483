import React from "react";
import { Image, Box } from "@chakra-ui/react";
import EmpoyeeLogin from "../Pages/EmpoyeeLogin";
import { Link } from "react-router-dom";
import { Divider } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        style={{
          //  margin: "0px 20px 0px 0px ",
          padding: "10px 50px",
          fontSize: "15px",
          color: "#44557A",
          lineHeight: "20px",
          border: "none",
          width: "50px",
          backgroundColor: "#ffff",
          fontWeight: "500",
        }}
        onClick={onOpen}
      >
        Jobs
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ display: "flex" }}>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                 
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Popular categories
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                IT jobs
              </li>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Sales Jobs
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Data Science Jobs
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Hr Jobs
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Engineering jobs
              </li>
            </ol>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  marginTop: "16px",
                 
                  marginLeft:"-10px"
                }}
              >
                Jobs in Demand
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Fresher Jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>MNC jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Remote Jobs</div>{" "}
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Work from Home Jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Walk-in jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>part-Time jobs</div>
              </li>
            </ol>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                 
                }}
              >
                Jobs By location
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                 
                }}
              >
                Jobs in dehli
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                MNC jobs
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in mumbai
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in banglore
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in Chennai
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in Pune
              </li>
            </ol>

            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea" ,marginLeft:"20px"}}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Explore More Jobs
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs by Categories
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs by skills
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Job by location
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in desitination
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in Chennai
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Create free job alert
              </li>
            </ol>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
//Companiesssssss
function Services() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        style={{
          // margin: "0px 20px 0px 0px ",
          padding: "10px 50px",
          fontSize: "15px",
          color: "#44557A",
          lineHeight: "20px",
          border: "none",
          width: "50px",
          backgroundColor: "#ffff",
          fontWeight: "500",
        }}
        onClick={onOpen}
      >
        Services
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ display: "flex" }}>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Resume Writing
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                Text Resume
              </li>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                Visual Resume
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                Resume Crtique
              </li>
            </ol>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Get Requierment Attention
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                <div>Resume Display</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                <div>Recriter connection</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                <div>Job Seacrh Booster</div>{" "}
              </li>

             

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                <div>Basic & Premium plan</div>
              </li>
            </ol>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Jobs By location
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginBottom: "6px",
                  marginTop: "16px",
                }}
              >
                Jobs in dehli
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                MNC jobs
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in mumbai
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in banglore
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in Chennai
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in Pune
              </li>
            </ol>

            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
                Learn & upskill
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",

                  marginTop: "16px",
                }}
              >
                Data Science Courses
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Technology Course
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Managment Courses
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Finance Courses
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginBottom: "6px",
                }}
              >
                Design Courses
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                HealthCare Courses
              </li>
            </ol>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}

function Companies() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        style={{
          padding: "10px 50px",
          fontSize: "15px",
          color: "#44557A",
          lineHeight: "20px",
          border: "none",
          width: "50px",
          backgroundColor: "#ffff",
          fontWeight: "500",
        }}
        onClick={onOpen}
      >
        Companies
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody style={{ display: "flex" }}>
            <ol style={{ marginLeft: "10px", boxShadow: "1px 0 0 #d3e1ea",marginLeft:"20px" }}>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginLeft:"-10px"
                 
                }}
              >
               Explore categories
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >     <div style={{ wordWrap: "break-word" }}>Unicorn</div></li>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div style={{ wordWrap: "break-word" }}>MNC</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
               StartUp
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
               Product Based
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Internet
              </li>
            </ol>
            <ol style={{ marginLeft: "20px", boxShadow: "1px 0 0 #d3e1ea" }}>
              <div
                style={{
                  fontSize: "16px",
                  color: "black",
                  marginTop: "16px",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
         Explore Collections
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Fresher Jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>MNC jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Remote Jobs</div>{" "}
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Work from Home Jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>Walk-in jobs</div>
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                <div>part-Time jobs</div>
              </li>
            </ol>
            <ol
              style={{
                marginLeft: "20px",
                boxShadow: "1px 0 0 #d3e1ea",
                marginRight: "10px",
              }}
            >
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                  boxShadow: "1px 0 0 #d3e1ea",
                  marginTop: "16px",
                  marginTop: "16px",
                  marginLeft:"-10px"
                }}
              >
             Research companies
              </div>

              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
             Interview Question
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
              Company Salary
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
               Comapny Review
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
                Jobs in banglore
              </li>
              <li
                style={{
                  fontSize: "10px",
                  color: "#44557A",
                  marginTop: "16px",
                }}
              >
               Salary Calculator
              </li>
              
            </ol>

          
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        style={{
          alignItem: "center",
          borderRadius: "50px",
          display: "inline-flex",
          fontWight: "600px",
          lineHeight: "16px",
          outline: "none",
          padding: "8px 20px",
          border: "1px solid #457eff",
          fontSize: "14px",
          color: "#457eff",
          borderColor: "#457eff",
          backgroundColor: "#fff",
          marginTop: "3px",
        }}
      >
        Login
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <EmpoyeeLogin />

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        transition: "box-shadow .1s ease-out,-webkit-box-shadow .1s ease-out",
        zIndex: "99",
        backgroundColor: "#fff",
        flexWrap: "nowrap",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ display: "flex", width: "10%" }}>
          <Box>
            <Image
              src="https://user-images.githubusercontent.com/106021674/207571761-527e3ab6-d4ab-4171-bf95-215123a94420.png"
              alt="logo"
              width="250px"
              height="130px"
              style={{ marginTop: "-40px" }}
            />
          </Box>
        </div>
        <div style={{ width: "40%" }}>
          <BasicUsage />
          <Companies />
          <Services />
        </div>
        <div style={{ width: "50%" }}>
          <DrawerExample />
          <Link to="/register">
            {" "}
            <Button
              style={{
                backgroundColor: "#ff7555",
                borderColor: "#ff7555",
                color: "#fff",
                height: "40px",
                marginLeft: "10px",
                width: "100px",
                borderRadius: "50px",
                fontSize: "13px",
                padding: "0px 12px",
              }}
            >
              Register
            </Button>
          </Link>
          {/* MENU BUTTONNNNNNNN */}

          <Menu>
            <MenuButton
              style={{
                marginLeft: "10px",
                fontSize: "14px",
                padding: "10px 20px",
                color: "#445578",
                backgroundColor: "#fff",
                boxShadow: "dark-lg",
              }}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              For Employee
            </MenuButton>
            <MenuList>
              <MenuItem>Buy online</MenuItem>
              <MenuItem>Hiring Solutions</MenuItem>
              <MenuItem>Employee Login</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
//https://user-images.githubusercontent.com/106021674/207571761-527e3ab6-d4ab-4171-bf95-215123a94420.png
