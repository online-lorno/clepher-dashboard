import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { Button, Modal } from "react-daisyui";
import { type DialogProps } from "react-daisyui/dist/Modal";
import { IoIosClose } from "react-icons/io";

type Props = {
  DialogBulkDelete: {
    ({
      children,
      ...props
      // eslint-disable-next-line @typescript-eslint/consistent-type-imports
    }: DialogProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
  };
  handleBulkDeleteSubmit: () => void;
  postEngagements: PostEngagement[];
};

const PostEnagementBulkDeleteModal = ({
  DialogBulkDelete,
  handleBulkDeleteSubmit,
  postEngagements,
}: Props): JSX.Element => {
  return (
    <DialogBulkDelete>
      <Modal.Header className="relative mb-4 font-bold">
        Bulk Delete Post Engagements
        <form method="dialog" className="absolute -top-1 right-0">
          <Button size="sm" shape="circle" color="ghost">
            <IoIosClose className="h-5 w-5" />
          </Button>
        </form>
      </Modal.Header>
      <Modal.Body>
        <div className="flex flex-col space-y-4">
          {postEngagements.length > 0 ? (
            <>
              <p>Are you sure to delete the selected Post Engagement(s)?</p>
              <div className="flex justify-end">
                <Button
                  size="sm"
                  color="primary"
                  onClick={handleBulkDeleteSubmit}
                >
                  Submit
                </Button>
              </div>
            </>
          ) : (
            <>
              <p>Please select Post Engagement(s) first.</p>
            </>
          )}
        </div>
      </Modal.Body>
    </DialogBulkDelete>
  );
};

export default PostEnagementBulkDeleteModal;
