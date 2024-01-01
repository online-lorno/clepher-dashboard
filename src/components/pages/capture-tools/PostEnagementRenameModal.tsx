/* eslint-disable @typescript-eslint/no-misused-promises */
import {
  type FormDataRenamePostEngagement,
  postEngagementRenameSchema,
} from "@/pages/capture-tools/schema";
import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Button, Input, Modal } from "react-daisyui";
import { type DialogProps } from "react-daisyui/dist/Modal";
import { Controller, useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";

type Props = {
  DialogRename: {
    ({
      children,
      ...props
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
  };
  handleRenameSubmit: (values: FormDataRenamePostEngagement) => void;
  postEngagement?: PostEngagement;
};

const PostEnagementRenameModal = ({
  DialogRename,
  handleRenameSubmit,
  postEngagement,
}: Props): JSX.Element => {
  const form = useForm<FormDataRenamePostEngagement>({
    resolver: zodResolver(postEngagementRenameSchema),
    defaultValues: {
      id: "",
      name: "",
    },
  });

  const handleSubmit = (values: FormDataRenamePostEngagement): void => {
    handleRenameSubmit(values);
    form.reset();
  };

  useEffect(() => {
    if (postEngagement) {
      form.setValue("id", postEngagement.id);
      form.setValue("name", postEngagement.name);
    }
  }, [postEngagement]);

  return (
    <DialogRename>
      <Modal.Header className="relative mb-4 font-bold">
        Rename Post Engagement
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
            <div className="flex justify-end">
              <Button type="submit" size="sm" color="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </DialogRename>
  );
};

export default PostEnagementRenameModal;
