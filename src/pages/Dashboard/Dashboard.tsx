import DashboardHeader from "./components/DashboardHeader";
import { Flex, Box } from "@chakra-ui/react";
import LeftSection1 from "./components/LeftSection1";
import LeftSection2 from "./components/LeftSection2";
import RightSection1 from "./components/RightSection1";
import UserCard from "./components/UserCard";
import LeftSection3 from "./components/LeftSection3";
import RightSectionBottom from "./components/RightSectionBottom";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />

      <Flex>
        <Box flex={2}>
          <LeftSection1 />
          <LeftSection2 />
          <LeftSection3 />
        </Box>
        <Box flex={3} p={3}>
          <Flex gap={3}>
            <Box flex={3}>
              <RightSection1 />
            </Box>
            <Box flex={2}>
              <UserCard />
            </Box>
          </Flex>
          <Box mt={3}>
            <RightSectionBottom />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
