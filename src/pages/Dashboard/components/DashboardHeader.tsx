import {
  Card,
  Heading,
  CardBody,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
  PopoverBody,
  Button,
  Box,
  Portal,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
const DashboardHeader = () => {
  return (
    <div className="h-full shadow-lg">
      <Card h="100%">
        <CardBody>
          <Flex gap={3}>
            <InternalStateEx />
            <InternalStateEx />
            <InternalStateEx />
          </Flex>
        </CardBody>
      </Card>
    </div>
  );
};

export default DashboardHeader;

function InternalStateEx() {
  const initRef = React.useRef(null);
  return (
    <Popover
      closeOnBlur={true}
      placement="bottom-start"
      initialFocusRef={initRef}
    >
      {({ onClose }) => (
        <>
          <PopoverTrigger>
            <div className="w-48 shadow-md p-3">
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  John Doe
                </Heading>
                <Text color={"gray.500"}>Frontend Developer</Text>
              </Stack>

              <Stack direction={"row"} justify={"center"} spacing={6}>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Followers
                  </Text>
                </Stack>
                <Stack spacing={0} align={"center"}>
                  <Text fontWeight={600}>23k</Text>
                  <Text fontSize={"sm"} color={"gray.500"}>
                    Followers
                  </Text>
                </Stack>
              </Stack>
            </div>
          </PopoverTrigger>
          <Portal>
            <PopoverContent p={5} shadow={"2xl"}>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>User Info goes here</Box>
                <Button
                  mt={4}
                  colorScheme="blue"
                  onClick={onClose}
                  ref={initRef}
                >
                  Close
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}
