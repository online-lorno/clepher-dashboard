import {
  type PostEngagement,
  type PostEngagementState,
} from "@/redux/post-engagement/postEnagementState";
import { type CaseReducer, type PayloadAction } from "@reduxjs/toolkit";

const saveToLocalStorage = (state: PostEngagementState): void => {
  localStorage.setItem(
    "clepher-post-engagements",
    JSON.stringify(state.postEngagements),
  );
};

export const createPostEngagement: CaseReducer<
  PostEngagementState,
  PayloadAction<PostEngagement>
> = (state, action) => {
  state.postEngagements.push(action.payload);
  saveToLocalStorage(state);
};

export const renamePostEngagement: CaseReducer<
  PostEngagementState,
  PayloadAction<Omit<PostEngagement, "platform">>
> = (state, action) => {
  const postEngagement = state.postEngagements.find(
    (postEngagement) => postEngagement.id === action.payload.id,
  );

  if (postEngagement) {
    postEngagement.name = action.payload.name;
  }

  saveToLocalStorage(state);
};

export const deletePostEngagement: CaseReducer<
  PostEngagementState,
  PayloadAction<PostEngagement>
> = (state, action) => {
  state.postEngagements = state.postEngagements.filter(
    (postEngagement) => postEngagement.id !== action.payload.id,
  );

  saveToLocalStorage(state);
};
