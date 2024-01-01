import SuspenseOutlet from "@/components/SuspenseOutlet";
import { Menu } from "react-daisyui";
import { BsFiletypeJson } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { TbBrandMessenger } from "react-icons/tb";
import { ImLink } from "react-icons/im";
import { Link } from "react-router-dom";

const CaptureToolsLayout = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-8">
      <div className="col-span-2 hidden lg:block">
        <Menu className="rounded-box bg-base-100 text-base">
          <Menu.Item>
            <Link to="/capture-tools/links-library" className="py-3">
              <ImLink className="h-4 w-4" />
              Links Library
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/customer-chat" className="py-3">
              <IoChatbubbleEllipsesOutline className="h-4 w-4" />
              Customer Chat
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/json-library" className="py-3">
              <BsFiletypeJson className="h-4 w-4" />
              JSON Generator
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/checkbox-plugin" className="py-3">
              <BsFiletypeJson className="h-4 w-4" />
              Checkbox Plugin
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/messenger-code" className="py-3">
              <FaCode className="h-4 w-4" />
              Messenger Code
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/post-engagement" className="py-3">
              <MdPostAdd className="h-4 w-4" />
              Post Engagement
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/capture-tools/send-to-messenger" className="py-3">
              <TbBrandMessenger className="h-4 w-4" />
              Send To Messenger
            </Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="lg:col-span-6">
        <SuspenseOutlet />
      </div>
    </div>
  );
};

export default CaptureToolsLayout;
