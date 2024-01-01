// import LanguageChanger from "@/components/LanguageChanger";
import MainDrawer from "@/components/MainDrawer";
import SuspenseOutlet from "@/components/SuspenseOutlet";
import ThemeChanger from "@/components/ThemeChanger";
import { useCallback, useState } from "react";
import { Avatar, Button, Dropdown, Navbar } from "react-daisyui";
import { BiBookOpen, BiBuildingHouse } from "react-icons/bi";
import { BsShieldExclamation, BsWallet2 } from "react-icons/bs";
import { FaRegCircle } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { IoMdLogOut } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { TbHome } from "react-icons/tb";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function MasterLayout(): JSX.Element {
  const [visible, setVisible] = useState(false);
  const toggleVisible = useCallback(() => {
    setVisible((visible) => !visible);
  }, []);

  return (
    <div className="bg-base-200">
      <Navbar
        className={twMerge(
          "fixed z-20 bg-base-100",
          "border-b border-b-base-200",
        )}
      >
        <Navbar.Start>
          <div className="lg:px-2">
            <Link to="/" className="hidden lg:block">
              <Avatar
                src="https://graph.facebook.com/237352949662793/picture?type=normal"
                shape="circle"
                size="xs"
              />
            </Link>
            <label
              htmlFor="side-nav-drawer"
              className="btn btn-circle btn-ghost lg:hidden"
              onClick={toggleVisible}
            >
              <GrMenu className="h-5 w-5" />
            </label>
          </div>

          {/* <Link className="ml-2 text-2xl font-bold" to="/">
            {import.meta.env.VITE_APP_NAME}
          </Link> */}
        </Navbar.Start>

        <Navbar.End>
          {/* <LanguageChanger className="mr-1" /> */}

          <Button
            shape="circle"
            color="ghost"
            className="hidden hover:bg-error hover:text-white md:flex"
          >
            <BsShieldExclamation className="h-5 w-5" />
          </Button>

          <ThemeChanger className="hidden md:block" />

          <Dropdown end className="hidden pr-3 md:block">
            <Dropdown.Toggle button={false}>
              <Button shape="circle" color="ghost">
                <FaRegCircle className="h-5 w-5" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-compact mt-3 w-52">
              <Dropdown.Item href="https://status.clepher.com/">
                <HiOutlineCheckCircle className="h-5 w-5" />
                Status
              </Dropdown.Item>
              <Dropdown.Item href="https://www.facebook.com/groups/clepher/">
                <BiBuildingHouse className="h-5 w-5" />
                Community
              </Dropdown.Item>
              <Dropdown.Item href="https://clepher.com/support/">
                <BiBookOpen className="h-5 w-5" />
                Knowledge Base
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown end>
            <Dropdown.Toggle button={false}>
              <Button color="ghost" shape="circle" className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src="https://avatars.githubusercontent.com/u/6301441?s=400&u=9c4a8a20a1dc0876326badc3671dbf67a40a8ec0&v=4"
                    loading="lazy"
                    alt="Profile"
                  />
                </div>
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu className="menu-compact mt-3 w-48">
              <Dropdown.Item>
                <TbHome className="h-5 w-5" />
                Home
              </Dropdown.Item>
              <Dropdown.Item>
                <BsWallet2 className="h-5 w-5" />
                Billing
              </Dropdown.Item>
              <Dropdown.Item>
                <LuUser className="h-5 w-5" />
                Account
              </Dropdown.Item>
              <Dropdown.Item>
                <IoMdLogOut className="h-5 w-5" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>

      <MainDrawer visible={visible} toggleVisible={toggleVisible}>
        <div className="px-6 py-8">
          <SuspenseOutlet />
        </div>
      </MainDrawer>
    </div>
  );
}
