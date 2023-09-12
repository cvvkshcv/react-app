import { Flex, Spacer, Tooltip } from "@chakra-ui/react";
import { useLocation, Link, NavLink } from "react-router-dom";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiFillDingtalkCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdContactSupport } from "react-icons/md";
import { BsFillChatLeftQuoteFill, BsFillCloudUploadFill } from "react-icons/bs";
import { useAuth } from "../store/useAuth";
// import { FaGoogle } from "react-icons/fa";

const NavBar = () => {
  const location = useLocation();
  const activePath = location.pathname;

  const { user, logout, loadingUser } = useAuth((store) => ({
    user: store.user,
    logout: store.logout,
    loadingUser: store.loadingUser,
  }));

  // const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex
        direction={{ base: "row", md: "column" }}
        fontSize="3xl"
        bg="black"
        color="white"
      >
        <Flex
          direction={{ base: "row", md: "column" }}
          gap="25px"
          justify="center"
          align="center"
          p={{ base: "2", md: "4" }}
        >
          {/* Logo start */}
          <Tooltip
            label="Chat with PDF"
            aria-label="Chat with PDF"
            placement="right-end"
            shouldWrapChildren
          >
            <AiFillDingtalkCircle size="44px" />
          </Tooltip>

          {/* Logo end */}
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              (isPending ? "pending" : isActive ? "text-yellow-400" : "") +
              " hover:scale-125 hover:rotate-12 transform-gpu transition-all"
            }
          >
            <Tooltip
              label="Upload your doc"
              aria-label="Upload your doc"
              placement="right-end"
              className="text-yellow-600"
              shouldWrapChildren
            >
              <BsFillCloudUploadFill />
            </Tooltip>
          </NavLink>

          {/* Chat with pdf start */}
          {activePath === "/docinsights" && (
            <Tooltip
              label="Chat with PDF"
              aria-label="Chat with PDF"
              placement="right-end"
              shouldWrapChildren
            >
              <BsFillChatLeftQuoteFill className="hover:scale-125 hover:rotate-12 transform-gpu transition-all" />
            </Tooltip>
          )}
          {/* Chat with pdf end */}
        </Flex>

        <Spacer />

        <Flex
          direction={{ base: "row", md: "column" }}
          gap="20px"
          justify="center"
          align="center"
          p="4"
        >
          <Link
            to="mailto:support@docxpert.com"
            className="hover:scale-125 hover:rotate-12 transform-gpu transition-all"
          >
            <Tooltip
              label="Support"
              aria-label="Support"
              placement="right-end"
              shouldWrapChildren
            >
              <MdContactSupport title="Support" />
            </Tooltip>
          </Link>

          <NavLink
            to={"/settings"}
            className={({ isActive, isPending }) =>
              (isPending ? "pending" : isActive ? "text-yellow-400" : "") +
              " hover:scale-125 hover:rotate-12 transform-gpu transition-all"
            }
          >
            <Tooltip
              label="Settings & Plan"
              aria-label="Settings & Plan"
              placement="right-end"
              shouldWrapChildren
            >
              <AiOutlineSetting />
            </Tooltip>
          </NavLink>
          {loadingUser ? (
            <AiOutlineLoading3Quarters />
          ) : (
            <>
              {user ? (
                <>
                  <NavLink
                    to={"/profile"}
                    className={({ isActive, isPending }) =>
                      (isPending
                        ? "pending"
                        : isActive
                        ? "text-yellow-400"
                        : "") +
                      " hover:scale-125 hover:rotate-12 transform-gpu transition-all"
                    }
                  >
                    <BiUserCircle />
                  </NavLink>

                  <AiOutlineLogout onClick={logout} title="Logout" />
                </>
              ) : (
                <>{/* <BiUserCircle onClick={onOpen} title="Login" /> */}</>
              )}
            </>
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default NavBar;
