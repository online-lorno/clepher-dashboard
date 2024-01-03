import {
  type PostEngagement,
  Platform,
} from "@/redux/post-engagement/postEnagementState";
import { Button, Checkbox, Table, Tooltip } from "react-daisyui";
import { FaEdit } from "react-icons/fa";
import { IoText, IoTrash } from "react-icons/io5";
import { Link } from "react-router-dom";

type Props = {
  postEngagements: PostEngagement[];
  handleRenameInit: (postEngagement: PostEngagement) => void;
  handleDeleteInit: (postEngagement: PostEngagement) => void;
};

const PostEngagementTable = ({
  postEngagements,
  handleRenameInit,
  handleDeleteInit,
}: Props): JSX.Element => {
  return (
    <Table size="sm">
      <Table.Head className="text-sm uppercase text-base-content">
        <Checkbox size="sm" />
        <div className="w-40">Name</div>
        <span>Platform</span>
        <span>Total Engaged/Unique</span>
        <span>Acquired Subscribers</span>
        <span>Conversion Rate</span>
        <span>Actions</span>
      </Table.Head>

      <Table.Body className="relative bg-base-100">
        {!postEngagements.length && (
          <tr>
            <td colSpan={7} className="text-center">
              No data
            </td>
          </tr>
        )}
        {postEngagements.length > 0 &&
          postEngagements.map((postEngagement) => (
            <Table.Row key={postEngagement.id}>
              <Checkbox size="sm" />
              <span>{postEngagement.name}</span>
              <span>
                <div className="h-4 w-4">
                  {postEngagement.platform === Platform.MESSENGER && (
                    <img src="/images/icon-messenger.svg" alt="messenger-svg" />
                  )}
                </div>
              </span>
              <span>14/3</span>
              <span>0</span>
              <span>0%</span>
              <div className="flex space-x-2">
                <Tooltip message="Edit">
                  <Link
                    to={`/capture-tools/post-engagement-builder/${postEngagement.id}`}
                  >
                    <Button size="sm" color="ghost" shape="circle">
                      <FaEdit className="h-4 w-4" />
                    </Button>
                  </Link>
                </Tooltip>
                <Tooltip message="Rename">
                  <Button
                    size="sm"
                    color="ghost"
                    shape="circle"
                    onClick={() => {
                      handleRenameInit(postEngagement);
                    }}
                  >
                    <IoText className="h-4 w-4" />
                  </Button>
                </Tooltip>
                <Tooltip message="Delete">
                  <Button
                    size="sm"
                    color="ghost"
                    shape="circle"
                    onClick={() => {
                      handleDeleteInit(postEngagement);
                    }}
                  >
                    <IoTrash className="h-4 w-4" />
                  </Button>
                </Tooltip>
              </div>
            </Table.Row>
          ))}
      </Table.Body>
    </Table>
  );
};

export default PostEngagementTable;
