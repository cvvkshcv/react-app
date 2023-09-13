import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Flex,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";

const UserCard = () => {
  return (
    <div className="shadow p-3 rounded my-3">
      <Flex alignItems="center" my={2}>
        <Box rounded="full" bg="gray.300" minW={12} minH={12} />
        <VStack ml={3} overflow="hidden" flex={1} spacing={0}>
          <Heading fontSize={12} w="full">
            Person
          </Heading>
          <Text overflow="hidden" textOverflow="ellipsis" fontSize="xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
            facere vero, laudantium ad aspernatur unde aperiam reiciendis
            dignissimos libero neque optio magnam placeat mollitia cum ipsam
            esse amet, labore eaque.
          </Text>
        </VStack>
      </Flex>
    </div>
  );
};

const RightSectionBottom = () => {
  return (
    <div>
      <Card size="md" h="100%">
        <CardHeader className="!pb-0">
          <Heading size="sm">Conversation</Heading>
        </CardHeader>
        <CardBody>
          {new Array(10).fill(0).map(() => {
            return <UserCard />;
          })}
        </CardBody>
      </Card>
    </div>
  );
};

export default RightSectionBottom;
