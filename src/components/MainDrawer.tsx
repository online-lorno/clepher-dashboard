import type React from "react";
import { Drawer, Menu } from "react-daisyui";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsChatText } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { GiFairyWand } from "react-icons/gi";
import { ImMagnet } from "react-icons/im";
import { IoIosMegaphone } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { VscGraphLine } from "react-icons/vsc";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  visible: boolean;
  toggleVisible: () => void;
};

const MainDrawer = ({
  children,
  visible,
  toggleVisible,
}: Props): JSX.Element => {
  return (
    <Drawer
      side={<SideMenu />}
      className="drawer-mobile"
      contentClassName="pt-[67px] lg:pl-[4.3rem] min-h-screen"
      open={visible}
      onClickOverlay={toggleVisible}
    >
      {children}
    </Drawer>
  );
};

const SideMenu = (): JSX.Element => {
  return (
    <Menu className="absolute min-h-full w-[4.3rem] border-r border-r-base-300 bg-base-100 px-0 pt-[4.3rem] text-base-content">
      <Menu.Item>
        <Link
          to="/"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Dashboard"
        >
          <AiOutlineDashboard className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/audience"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Audience"
        >
          <LuUsers className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/livechat"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Live Chat"
        >
          <BsChatText className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/capture-tools"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Capture Tools"
        >
          <ImMagnet className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/broadcasts"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Broadcasts"
        >
          <IoIosMegaphone className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/magic"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Magic"
        >
          <GiFairyWand className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/analytics"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Analytics"
        >
          <VscGraphLine className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to="/settings"
          className="tooltip tooltip-right rounded-none py-4"
          data-tip="Settings"
        >
          <CiSettings className="mx-auto h-5 w-5" />
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MainDrawer;
