import { useState } from "react";
import { Button, Toggle, Input } from "react-daisyui";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const PostEngagementBuilderPage = (): JSX.Element => {
  const [excludeKeywords, setExcludeKeywords] = useState<string[]>([]);
  const [triggerKeywords, setTriggerKeywords] = useState<string[]>([]);

  const handleSubmitExcludeKeyword = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
    e.preventDefault();

    const keyword = e.currentTarget["exclude-keyword"].value;
    setExcludeKeywords((prev) => [...prev, keyword]);

    // reset form
    e.currentTarget.reset();
  };

  const handleRemoveExcludeKeyword = (keyword: string): void => {
    setExcludeKeywords((prev) =>
      prev.filter((prevKeyword) => prevKeyword !== keyword),
    );
  };

  const handleSubmitTriggerKeyword = (
    e: React.FormEvent<HTMLFormElement>,
  ): void => {
    e.preventDefault();

    const keyword = e.currentTarget["trigger-keyword"].value;
    setTriggerKeywords((prev) => [...prev, keyword]);

    // reset form
    e.currentTarget.reset();
  };

  const handleRemoveTriggerKeyword = (keyword: string): void => {
    setTriggerKeywords((prev) =>
      prev.filter((prevKeyword) => prevKeyword !== keyword),
    );
  };

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
                  <div className="flex gap-2 flex-wrap">
                    {excludeKeywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="inline-flex items-center px-3 py-2 text-sm text-gray-800 bg-red-50 rounded-full border border-red-200 gap-3">
                          {keyword}
                          <button
                            className="text-red-400"
                            onClick={() => {
                              handleRemoveExcludeKeyword(keyword);
                            }}
                          >
                            ×
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmitExcludeKeyword}>
                    <div className="relative">
                      <Input
                        className="w-full pr-32"
                        name="exclude-keyword"
                        required
                      />
                      <Button
                        type="submit"
                        color="primary"
                        className="absolute top-0 right-0 rounded-l-none"
                      >
                        Add keyword
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Only Trigger For Comments With These Keywords */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-between border-b border-b-gray-300 pb-2">
                    <span className="font-semibold">
                      Only Trigger For Comments With These Keywords
                    </span>
                    <AiOutlineQuestionCircle className="h-5 w-5" />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {triggerKeywords.map((keyword, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="inline-flex items-center px-3 py-2 text-sm text-gray-800 bg-green-50 rounded-full border border-green-200 gap-3">
                          {keyword}
                          <button
                            className="text-green-400"
                            onClick={() => {
                              handleRemoveTriggerKeyword(keyword);
                            }}
                          >
                            ×
                          </button>
                        </span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmitTriggerKeyword}>
                    <div className="relative">
                      <Input
                        className="w-full pr-32"
                        name="trigger-keyword"
                        required
                      />
                      <Button
                        type="submit"
                        color="primary"
                        className="absolute top-0 right-0 rounded-l-none"
                      >
                        Add keyword
                      </Button>
                    </div>
                  </form>
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
