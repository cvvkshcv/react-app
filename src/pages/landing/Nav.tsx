import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Container,
  Center,
  Text,
  ModalContent,
  Modal,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import { FaGoogle } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  );
};

export default function Simple() {
  const navigate = useNavigate();
  const { googleLogin } = useAuth((store) => ({
    googleLogin: store.googleLogin,
  }));

  const { isOpen, onOpen, onClose } = useDisclosure();
  const termConditionText = `By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.`;

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <AiFillDingtalkCircle size="44px" title="Doc Xpert" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Box
                as="a"
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "gray.700"),
                }}
                onClick={() => {
                  onOpen();
                }}
              >
                Login
              </Box>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="none"
          backdropFilter="auto"
          backdropInvert="80%"
          backdropBlur="2px"
        />
        <ModalContent>
          <Container>
            <Box>
              <Center h="100px">
                <Button
                  size="md"
                  height="48px"
                  width="200px"
                  border="2px"
                  variant="outline"
                  leftIcon={<FaGoogle />}
                  onClick={() => googleLogin(onClose, navigate)}
                >
                  Sign in with Google
                </Button>
              </Center>
            </Box>
            <Box>
              <Text fontSize="xs">{termConditionText}</Text>
            </Box>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
}
