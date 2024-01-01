import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { Button, Modal } from "react-daisyui";
import { type DialogProps } from "react-daisyui/dist/Modal";
import { IoIosClose } from "react-icons/io";

type Props = {
  DialogDelete: {
    ({
      children,
      ...props
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
  };
  handleDeleteSubmit: () => void;
  postEngagement?: PostEngagement;
};

const PostEnagementDeleteModal = ({
  DialogDelete,
  handleDeleteSubmit,
  postEngagement,
}: Props): JSX.Element => {
  return (
    <DialogDelete>
      <Modal.Header className="relative mb-4 font-bold">
        Delete Post Engagement
        <form method="dialog" className="absolute -top-1 right-0">
          <Button size="sm" shape="circle" color="ghost">
            <IoIosClose className="h-5 w-5" />
          </Button>
        </form>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col space-y-4">
          <p>
            Are you sure to delete &quot;
            <strong>{postEngagement?.name}</strong>&quot; Post Engagement
          </p>
          <div className="flex justify-end">
            <Button size="sm" color="primary" onClick={handleDeleteSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </Modal.Body>
    </DialogDelete>
  );
};

export default PostEnagementDeleteModal;
