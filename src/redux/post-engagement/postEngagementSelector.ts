import { type PostEngagementState } from "@/redux/post-engagement/postEnagementState";
import { type RootState } from "@/store";

export const getPostEngagements = (
  state: RootState,
): PostEngagementState["postEngagements"] => {
  return state.postEngagement.postEngagements;
};
