import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React from 'react'
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [picLoading, setPicLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

const handleClick = () => setShow(!show);

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    //   setUser(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };
//   const submitHandler = async () => {
//     setPicLoading(true);
//     if (!name || !email || !password || !confirmpassword) {
//       toast({
//         title: "Please Fill all the Feilds",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//     if (password !== confirmpassword) {
//       toast({
//         title: "Passwords Do Not Match",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     console.log(name, email, password, pic);
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const { data } = await axios.post(
//         "/api/user",
//         {
//           name,
//           email,
//           password,
//           pic,
//         },
//         config
//       );
//       console.log(data);
//       toast({
//         title: "Registration Successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       localStorage.setItem("userInfo", JSON.stringify(data));
//       setPicLoading(false);
//       history.push("/chats");
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: error.response.data.message,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//     }
//   };

//   const postDetails = (pics) => {
//     setPicLoading(true);
//     if (pics === undefined) {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     console.log(pics);
//     if (pics.type === "image/jpeg" || pics.type === "image/png") {
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "chat-app");
//       data.append("cloud_name", "piyushproj");
//       fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
//         method: "post",
//         body: data,
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           setPic(data.url.toString());
//           console.log(data.url.toString());
//           setPicLoading(false);
//         })
//         .catch((err) => {
//           console.log(err);
//           setPicLoading(false);
//         });
//     } else {
//       toast({
//         title: "Please Select an Image!",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setPicLoading(false);
//       return;
//     }
//   };

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setPassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
}

export default Login