import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Checkbox,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
const LeftSection2 = () => {
  return (
    <div className="shadow-lg mt-3">
      <Card size="md">
        <CardHeader className="!pb-0">
          <Heading size="sm">Questions to be asked</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Checkbox defaultChecked className="items-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Checkbox>

            <Checkbox>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Checkbox>

            <Checkbox>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Checkbox>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};

export default LeftSection2;
