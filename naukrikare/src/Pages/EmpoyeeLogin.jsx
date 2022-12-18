import React from "react";
import { background, Button, Text } from "@chakra-ui/react";

import { Navigate, Link } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { AppContext } from "../Context/AuthContextProvider";

const initialState = {
  email: "",
  password: "",
};

const EmpoyeeLogin = () => {
  const [init, setinit] = React.useState(initialState);

  const { isAuth, token, Logout, login } = React.useState(AppContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setinit({ ...init, [name]: value });
  };
  console.log(init);
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.disabled = true;
    try {
      let res = await fetch(`https://reqres.in/api/login`, {
        method: "POST",
        body: JSON.stringify(init),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.json();
      console.log(data);
      if (data.token !== undefined) {
        login(data.token);
      }
    } catch (err) {
      console.log("err:", err);
    }
  };
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to="/register" />;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          marginTop: "38px",
        }}
      >
        <Text
          style={{
            color: "#091e42",
            fontSize: "13px",
            fontWeight: "500px",
            lineHieght: "28px",
            margin: "unset",
            marginLeft: "5px",
          }}
        >
          Login
        </Text>
        <Text
          style={{
            color: "#4A90E2",
            fontSize: "13px",
            textAlign: "center",
            float: "right",
            lineHeight: "14px",
            marginRight: "5px",
          }}
        >
          Register for free
        </Text>
      </div>
      <br />
      <br />
      <br />
      <div>
        <FormControl>
          <FormLabel
            style={{
              fontSize: "10px",

              display: "block",
              marginBotton: "4px",
              fontWeight: "500",
              paddingTop: "7px",
              marginLeft: "50px",
            }}
          >
            Email Id/Username
          </FormLabel>
          <input
            style={{
              fontSize: "14px",

              padding: "6px 20px",
              outline: "none",
              boxSizing: "border-box",
              borderRadius: "2px",
              border: "1px solid #da534d",
              marginLeft: "50px",
            }}
            type="email"
            onChange={handleChange}
            placeholder="Enter Your active Email ID /Username"
          />
          <br />
          <FormLabel
            style={{
              fontSize: "10px",
              lineHeight: "16px",
              display: "block",
              marginBotton: "4px",
              fontWeight: "500",
              paddingTop: "7px",
              marginLeft: "50px",
            }}
          >
            Password
          </FormLabel>
          <input
            style={{
              fontSize: "14px",

              padding: "6px 25px",
              outline: "none",
              boxSizing: "border-box",
              borderRadius: "2px",
              border: "1px solid #da534d",
              marginLeft: "50px",
            }}
            type="password"
            onChange={handleChange}
            placeholder="Enter Your Password"
          />
        </FormControl>
        <Link to="/register">
          <Button
            onSubmit={handleSubmit}
            style={{
              color: "#fff",
              boxShadow: "0 2px 6px 0 rgb(0 0 0 / 20%);",
              backgroundColor: "#4a90e2",
              fontWeight: "500",

              textAlign: "center",
              fontSize: "12px",
              marginTop: "30px",
              display: "inline-block",

              padding: "0px 100px",
              marginLeft: "50px",
            }}
          >
            Login
          </Button>
        </Link>
        <br />
        <br />
        <Text ml={100} color="blue.400" bgColor="#fff" fontSize="sm">
          Use OTP to Login
        </Text>
        <br />
      </div>
      <div>
        <div
          style={{
            margin: "0 auto",
            width: "70%",
            borderBottom: "1px solid #d4dfef",
            position: " relative",
            marginBottom: " 28px",
            marginTop: "10px",
            marginLeft: "40px",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "45%",
              background: "white",
              width: "20px",
              textAlign: "center",
              marginTop: "-7px",
              fontSize: "12px",
              color: " #8993a4",
              marginLeft: "20px",
            }}
          >
            or
          </span>
        </div>
      </div>
      <div
        style={{
          marginTop: "17px",
          borderRadius: "20px",
          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 24%)",
          height: "40px",
          marginLeft: "20px",
        }}
      >
        <div
          style={{
            borderRadius: " 20px",
            boxShadow: " 0 1px 2px 0 rgb(0 0 0 / 0%)",
            marginRight: " 0px !important",
            marginBottom: " 5px",
            width: "auto !important",
            display: "flex",
          }}
        >
          <em
            style={{
              width: "18px",
              height: " 18px",
              margin: "11px 11px 11px 16px",
              backgroundSize: "18px 18px",
            }}
          >
            <img
              src="data:image/png;base64,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"
              width="13px"
              height="13px"
            />
          </em>
          <span
            style={{
              marginLeft: "56px",
              color: "black",
              fontSize: "14px",
              letterSpacing: "0.4px",
              lineHeight: " 16px",
              textAlign: "left",
              marginTop: "12px",
            }}
          >
            Sign in with Google
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmpoyeeLogin;
