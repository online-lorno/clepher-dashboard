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

export const PostEngagementInitialState = (): PostEngagementState => {
  const jsonPostEngagements = localStorage.getItem("clepher-post-engagements");
  return {
    postEngagements: jsonPostEngagements
      ? (JSON.parse(jsonPostEngagements) as PostEngagement[])
      : [],
  };
};
