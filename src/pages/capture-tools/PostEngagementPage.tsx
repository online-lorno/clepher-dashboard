/* eslint-disable @typescript-eslint/no-misused-promises */
import PostEnagementCreateModal from "@/components/pages/capture-tools/PostEnagementCreateModal";
import PostEnagementDeleteModal from "@/components/pages/capture-tools/PostEnagementDeleteModal";
import PostEnagementRenameModal from "@/components/pages/capture-tools/PostEnagementRenameModal";
import PostEnagementBulkDeleteModal from "@/components/pages/capture-tools/PostEnagementBulkDeleteModal";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { type PostEngagement } from "@/redux/post-engagement/postEnagementState";
import { postEngagementActions } from "@/redux/post-engagement/postEngagemenSlice";
import { getPostEngagements } from "@/redux/post-engagement/postEngagementSelector";
import { useState } from "react";
import { Modal } from "react-daisyui";
import {
  DataTable,
  columns,
} from "@/components/pages/capture-tools/PostEngagementTable";

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
  const { Dialog: DialogBulkDelete, handleShow: handleShowBulkDelete } =
    Modal.useDialog();
  const [selectedPostEngagement, setSelectedPostEngagement] =
    useState<PostEngagement>();
  const [bulkPostEngagements, setBulkPostEngagements] = useState<
    PostEngagement[]
  >([]);
  const [resetBulkSelection, setResetBulkSelection] = useState(false);

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

  const handleBulkDeleteInit = (postEngagements: PostEngagement[]): void => {
    setBulkPostEngagements(postEngagements);
    setTimeout(() => {
      handleShowBulkDelete();
    }, 100);
  };

  const handleBulkDeleteSubmit = (): void => {
    if (bulkPostEngagements.length > 0) {
      dispatch(
        postEngagementActions.bulkDeletePostEngagements(bulkPostEngagements),
      );
      setBulkPostEngagements([]);
      setResetBulkSelection(true);
    }
  };

  return (
    <>
      <DataTable
        columns={columns}
        data={postEngagements}
        handleShowCreate={handleShowCreate}
        handleRenameInit={handleRenameInit}
        handleDeleteInit={handleDeleteInit}
        handleBulkDeleteInit={handleBulkDeleteInit}
        resetBulkSelection={resetBulkSelection}
        setResetBulkSelection={setResetBulkSelection}
      />
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
      <PostEnagementBulkDeleteModal
        DialogBulkDelete={DialogBulkDelete}
        handleBulkDeleteSubmit={handleBulkDeleteSubmit}
        postEngagements={bulkPostEngagements}
      />
    </>
  );
};

export default PostEngagementPage;
