import {z} from "zod";

export const UpdateUserProfileDto = z.object({
  displayName: z.string().min(1).max(255),
  title: z.string().optional(),
  description: z.string().optional().default(""),
  socials: z.string().optional(),
  company: z.string().optional(),
  avatarUrl: z.string().optional(),
})