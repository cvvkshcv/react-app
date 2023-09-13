import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Box,
  Flex,
} from "@chakra-ui/react";

const RightSection1 = () => {
  return (
    <div className="h-[100%]">
      <Card size="md" h="100%">
        <CardHeader className="!pb-0">
          <Heading size="sm">Statistics</Heading>
        </CardHeader>
        <CardBody>
          <Flex w="100%">
            <Box flex={1}>
              <CircularProgress value={40} color="green.400" size="120px">
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box flex={1}>
              <CircularProgress value={60} color="green.400" size="120px">
                <CircularProgressLabel>60%</CircularProgressLabel>
              </CircularProgress>
            </Box>
            <Box flex={1}>
              <CircularProgress value={80} color="green.400" size="120px">
                <CircularProgressLabel>80%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
          <Box className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur aspernatur iusto pariatur porro dolorem libero
            temporibus dolores, nobis eius ut at quisquam beatae assumenda esse!
          </Box>
        </CardBody>
      </Card>
    </div>
  );
};

export default RightSection1;
