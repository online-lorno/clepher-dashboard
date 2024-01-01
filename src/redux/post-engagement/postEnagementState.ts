export enum PostEngagementPlatform {
  MESSENGER = "messenger",
}

export interface PostEngagement {
  id: string;
  name: string;
  platform: PostEngagementPlatform;
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
