import defaultPostEngagementsJson from "@/constants/post-engagement.json";

export enum Platform {
  MESSENGER = "messenger",
}

export enum ReactionEmoji {
  LIKE = "👍",
  LOVE = "❤️",
  CARE = "😍",
  HAHA = "😆",
  WOW = "😮",
  SAD = "😢",
  ANGRY = "😡",
}

export interface PostEngagement {
  id: string;
  name: string;
  platform: Platform;
  exclude_keywords?: string[];
  trigger_keywords?: string[];
}

export interface PostEngagementState {
  postEngagements: PostEngagement[];
}

const defaultPostEngaments = defaultPostEngagementsJson as PostEngagement[];
export const PostEngagementInitialState = (): PostEngagementState => {
  let postEngagements;
  const jsonPostEngagements = localStorage.getItem("clepher-post-engagements");

  if (jsonPostEngagements) {
    postEngagements = JSON.parse(jsonPostEngagements) as PostEngagement[];
  }

  return {
    postEngagements: postEngagements ?? defaultPostEngaments,
  };
};
