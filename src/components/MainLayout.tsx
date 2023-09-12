import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import NavBar from "./NavBar";
import { Box, Flex } from "@chakra-ui/react";

const MainLayout = () => {
  const navigate = useNavigate();

  const { user, loadingUser } = useAuth((store) => ({
    user: store.user,
    loadingUser: store.loadingUser,
  }));

  useEffect(() => {
    if (!loadingUser && !user) {
      console.log("No user and loadingUser");
      navigate("/");
    }
  }, [loadingUser, navigate, user]);

  return (
    <Box h="100vh">
      <Flex w="100%" h="100%" direction={{ base: "column", md: "row" }}>
        <NavBar />
        <Outlet />
      </Flex>
    </Box>
  );
};

export default MainLayout;
