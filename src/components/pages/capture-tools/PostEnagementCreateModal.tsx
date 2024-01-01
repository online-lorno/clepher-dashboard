/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  type FormDataCreatePostEngagement,
  postEngagementCreateSchema,
} from "@/pages/capture-tools/schema";
import { PostEngagementPlatform } from "@/redux/post-engagement/postEnagementState";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Modal, Select } from "react-daisyui";
import { type DialogProps } from "react-daisyui/dist/Modal";
import { Controller, useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

type Props = {
  DialogCreate: {
    ({
      children,
      ...props
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
  };
  handleCreateSubmit: (values: FormDataCreatePostEngagement) => void;
};

const PostEnagementCreateModal = ({
  DialogCreate,
  handleCreateSubmit,
}: Props): JSX.Element => {
  const form = useForm<FormDataCreatePostEngagement>({
    resolver: zodResolver(postEngagementCreateSchema),
    defaultValues: {
      name: "",
      platform: PostEngagementPlatform.MESSENGER,
    },
  });

  const handleSubmit = (values: FormDataCreatePostEngagement): void => {
    handleCreateSubmit(values);
    form.reset();
  };

  return (
    <DialogCreate>
      <Modal.Header className="relative mb-4 font-bold">
        Create Post Engagement
        <form method="dialog" className="absolute -top-1 right-0">
          <Button size="sm" shape="circle" color="ghost">
            <IoIosClose className="h-5 w-5" />
          </Button>
        </form>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-sm">
                Please enter name
              </label>
              <Controller
                name="name"
                control={form.control}
                render={({ field }) => <Input {...field} autoComplete="off" />}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="" className="text-sm">
                Select a platform
              </label>
              <Controller
                name="platform"
                control={form.control}
                render={({ field }) => (
                  <Select {...field}>
                    {Object.values(PostEngagementPlatform).map((value) => {
                      const platformName =
                        value.charAt(0).toUpperCase() + value.slice(1);
                      return (
                        <option key={value} value={value}>
                          {platformName}
                        </option>
                      );
                    })}
                  </Select>
                )}
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" size="sm" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </DialogCreate>
  );
};

export default PostEnagementCreateModal;
