import { PostEngagementInitialState } from "@/redux/post-engagement/postEnagementState";
import {
  createPostEngagement,
  deletePostEngagement,
  renamePostEngagement,
  bulkDeletePostEngagements,
} from "@/redux/post-engagement/postEngagementReducer";
import { createSlice } from "@reduxjs/toolkit";

const postEngagementSlice = createSlice({
  name: "postEngagement",
  initialState: PostEngagementInitialState,
  reducers: {
    createPostEngagement,
    deletePostEngagement,
    renamePostEngagement,
    bulkDeletePostEngagements,
  },
});

export const postEngagementActions = postEngagementSlice.actions;
export default postEngagementSlice.reducer;
