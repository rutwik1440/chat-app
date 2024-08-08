// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";
// // import { useEffect } from "react";
// // import { useHistory } from "react-router";
// import Login from "../components/Authentication/Login";
// import Signup from "../components/Authentication/Signup";

// function Homepage() {
//   // const history = useHistory();

//   // useEffect(() => {
//   //   const user = JSON.parse(localStorage.getItem("userInfo"));

//   //   if (user) history.push("/chats");
//   // }, [history]);

//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="white"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
//         <Text fontSize="4xl" fontFamily="Work sans">
//           Sync-it
//         </Text>
//       </Box>
//       <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded">
//           <TabList mb="1em">
//             <Tab>Login</Tab>
//             <Tab>Sign Up</Tab>
//           </TabList>
//           <TabPanels>
//             <TabPanel>
//               <Login />
//             </TabPanel>
//             <TabPanel>
//               <Signup />
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   );
// }

// export default Homepage;


import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="rgba(0, 0, 0, 0.2)"  
        backdropFilter="blur(50px)" 
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        color="white"                 // text color white
      >
        <Text
          fontSize="4xl"
          fontFamily="Work sans"
          color="white"
          fontWeight="bold"           // make the title bold
          textAlign="center"          // center the title
        >
          Sync-it
        </Text>
      </Box>
      <Box
        bg="rgba(0, 0, 0, 0.2)"  
        backdropFilter="blur(50px)" 
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
        color="white"                 // text color white
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color="white">Login</Tab>
            <Tab color="white">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
