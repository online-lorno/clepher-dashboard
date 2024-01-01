/* eslint-disable @typescript-eslint/no-misused-promises */
import PostEnagementCreateModal from "@/components/pages/capture-tools/PostEnagementCreateModal";
import PostEnagementDeleteModal from "@/components/pages/capture-tools/PostEnagementDeleteModal";
import PostEnagementRenameModal from "@/components/pages/capture-tools/PostEnagementRenameModal";
import PostEngagementTable from "@/components/pages/capture-tools/PostEngagementTable";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { postEngagementActions } from "@/redux/post-engagement/postEngagemenSlice";
import { getPostEngagements } from "@/redux/post-engagement/postEngagementSelector";
import { useState } from "react";
import { Button, Input, Join, Modal } from "react-daisyui";
import { IoIosSearch } from "react-icons/io";

import {
  type FormDataCreatePostEngagement,
  type FormDataRenamePostEngagement,
} from "./schema";

const PostEngagementPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const postEngagements = useAppSelector(getPostEngagements);
  const { Dialog: DialogCreate, handleShow: handleShowCreate } =
    Modal.useDialog();
  const { Dialog: DialogRename, handleShow: handleShowRename } =
    Modal.useDialog();
  const { Dialog: DialogDelete, handleShow: handleShowDelete } =
    Modal.useDialog();
  const [selectedPostEngagement, setSelectedPostEngagement] =
    useState<PostEngagement>();

  const handleCreateSubmit = (values: FormDataCreatePostEngagement): void => {
    dispatch(
      postEngagementActions.createPostEngagement({
        id: Date.now().toString(),
        ...values,
      }),
    );
  };

  const handleRenameInit = (postEngagement: PostEngagement): void => {
    setSelectedPostEngagement(postEngagement);
    setTimeout(() => {
      handleShowRename();
    }, 100);
  };

  const handleRenameSubmit = (values: FormDataRenamePostEngagement): void => {
    dispatch(postEngagementActions.renamePostEngagement(values));
    setSelectedPostEngagement(undefined);
  };

  const handleDeleteInit = (postEngagement: PostEngagement): void => {
    setSelectedPostEngagement(postEngagement);
    setTimeout(() => {
      handleShowDelete();
    }, 100);
  };

  const handleDeleteSubmit = (): void => {
    if (selectedPostEngagement) {
      dispatch(
        postEngagementActions.deletePostEngagement(selectedPostEngagement),
      );
      setSelectedPostEngagement(undefined);
    }
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <span className="text-xl">Post Engagement Manager</span>
          <div className="flex space-x-2">
            <div className="form-control hidden md:flex">
              <Join>
                <Input
                  size="sm"
                  className="join-item border-r-0 border-neutral focus-within:outline-none focus:outline-none"
                  placeholder="Search..."
                />
                <div className="join-item border border-l-0 border-neutral bg-base-100 p-1">
                  <IoIosSearch className="h-5 w-5" />
                </div>
              </Join>
            </div>
            <Button
              size="sm"
              variant="outline"
              color="primary"
              onClick={handleShowCreate}
            >
              Create New
            </Button>
          </div>
        </div>
        <div className="overflow-y-hidden overflow-x-scroll md:overflow-hidden">
          <PostEngagementTable
            postEngagements={postEngagements}
            handleRenameInit={handleRenameInit}
            handleDeleteInit={handleDeleteInit}
          />
        </div>
      </div>
      <PostEnagementCreateModal
        DialogCreate={DialogCreate}
        handleCreateSubmit={handleCreateSubmit}
      />
      <PostEnagementRenameModal
        DialogRename={DialogRename}
        handleRenameSubmit={handleRenameSubmit}
        postEngagement={selectedPostEngagement}
      />
      <PostEnagementDeleteModal
        DialogDelete={DialogDelete}
        handleDeleteSubmit={handleDeleteSubmit}
        postEngagement={selectedPostEngagement}
      />
    </>
  );
};

export default PostEngagementPage;
