import { Button, Toggle } from "react-daisyui";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const PostEngagementBuilderPage = (): JSX.Element => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-end space-x-4">
        <Toggle defaultChecked color="primary" />
        <Button color="primary">Save</Button>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap">
        <div className="min-h-screen w-full overflow-y-auto bg-gray-100 lg:min-h-[calc(100vh-211px)] lg:w-1/3">
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="config_tabs"
              role="tab"
              className="tab"
              aria-label="Settings"
              checked
            />
            <div role="tabpanel" className="tab-content p-6">
              <div className="flex flex-col space-y-6">
                <div className="mlex flex-col space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="toggle__enable_private_reply"
                      className="cursor-pointer text-sm"
                    >
                      Enable To Privately Reply To First-Level Comments Only
                    </label>
                    <Toggle
                      defaultChecked
                      color="primary"
                      size="sm"
                      id="toggle__enable_private_reply"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="toggle__send_message_once_per_post"
                      className="cursor-pointer text-sm"
                    >
                      Send Message To The Same User Only Once Per Post
                    </label>
                    <Toggle
                      defaultChecked
                      color="primary"
                      size="sm"
                      id="toggle__send_message_once_per_post"
                    />
                  </div>
                </div>

                {/* Require a Post Reaction */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <span className="font-semibold">
                      Require a Post Reaction
                    </span>
                    <AiOutlineQuestionCircle className="h-5 w-5" />
                  </div>
                  <Button className="w-full" color="primary">
                    Require reaction
                  </Button>
                </div>

                {/* Exclude Comments With These Keywords */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <span className="font-semibold">
                      Exclude Comments With These Keywords
                    </span>
                    <AiOutlineQuestionCircle className="h-5 w-5" />
                  </div>
                  <Button className="w-full" color="primary">
                    Require reaction
                  </Button>
                </div>

                {/* Only Trigger For Comments With These Keywords */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <span className="font-semibold">
                      Only Trigger For Comments With These Keywords
                    </span>
                    <AiOutlineQuestionCircle className="h-5 w-5" />
                  </div>
                  <Button className="w-full" color="primary">
                    Require reaction
                  </Button>
                </div>
              </div>
            </div>

            <input
              type="radio"
              name="config_tabs"
              role="tab"
              className="tab"
              aria-label="Auto Response"
            />
            <div role="tabpanel" className="tab-content p-10">
              Tab content 2
            </div>
          </div>
        </div>
        <div className="flex min-h-screen w-full bg-white lg:min-h-[calc(100vh-211px)] lg:w-2/3">
          2
        </div>
      </div>
    </div>
  );
};

export default PostEngagementBuilderPage;
