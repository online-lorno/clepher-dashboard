import { PostEngagementPlatform } from "@/redux/post-engagement/postEnagementState";
import * as z from "zod";

export const postEngagementCreateSchema = z.object({
  name: z.string().min(1),
  platform: z.nativeEnum(PostEngagementPlatform),
});

export type FormDataCreatePostEngagement = z.infer<
  typeof postEngagementCreateSchema
>;

export const postEngagementRenameSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
});

export type FormDataRenamePostEngagement = z.infer<
  typeof postEngagementRenameSchema
>;
