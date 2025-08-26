// User-related types (extending auth types)

import { User as BaseUser } from './auth';

// Extended user types for specific use cases
export interface UserProfile extends BaseUser {
  followerCount: number;
  followingCount: number;
  postCount: number;
  reputation: number;
  badges: Badge[];
  socialLinks: SocialLink[];
  verificationStatus: VerificationStatus;
}

export interface UserSummary {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isOnline: boolean;
  lastSeen?: string;
}

export interface UserStats {
  userId: string;
  postsCount: number;
  commentsCount: number;
  likesReceived: number;
  viewsReceived: number;
  followerCount: number;
  followingCount: number;
  joinedAt: string;
  lastActive: string;
}

// User relationships
export interface UserFollow {
  id: string;
  followerId: string;
  followingId: string;
  follower: UserSummary;
  following: UserSummary;
  createdAt: string;
}

export interface UserBlock {
  id: string;
  blockerId: string;
  blockedId: string;
  blocker: UserSummary;
  blocked: UserSummary;
  reason?: string;
  createdAt: string;
}

// User activity
export interface UserActivity {
  id: string;
  userId: string;
  type: ActivityType;
  action: string;
  targetId?: string;
  targetType?: string;
  metadata?: Record<string, any>;
  createdAt: string;
}

export type ActivityType = 
  | 'post_created'
  | 'post_liked' 
  | 'post_shared'
  | 'comment_created'
  | 'user_followed'
  | 'profile_updated'
  | 'achievement_unlocked';

// User badges and achievements
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: BadgeType;
  rarity: BadgeRarity;
  criteria: Record<string, any>;
  earnedAt?: string;
}

export type BadgeType = 'achievement' | 'milestone' | 'special' | 'community';
export type BadgeRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Social links
export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  username?: string;
  verified: boolean;
  public: boolean;
}

export type SocialPlatform = 
  | 'twitter'
  | 'linkedin'
  | 'github'
  | 'instagram'
  | 'facebook'
  | 'youtube'
  | 'tiktok'
  | 'discord'
  | 'website';

// Verification status
export interface VerificationStatus {
  email: boolean;
  phone: boolean;
  identity: boolean;
  business: boolean;
  social: boolean;
}

// User search and filtering
export interface UserSearchFilters {
  query?: string;
  location?: string;
  verified?: boolean;
  badges?: string[];
  minReputation?: number;
  maxReputation?: number;
  joinedAfter?: string;
  joinedBefore?: string;
  isOnline?: boolean;
  sortBy?: UserSortField;
  sortOrder?: 'asc' | 'desc';
}

export type UserSortField = 
  | 'name'
  | 'email'
  | 'reputation'
  | 'followerCount'
  | 'postCount'
  | 'createdAt'
  | 'lastLoginAt';

// User management (admin)
export interface UserModerationAction {
  id: string;
  userId: string;
  moderatorId: string;
  type: ModerationActionType;
  reason: string;
  duration?: number; // in minutes
  expiresAt?: string;
  createdAt: string;
}

export type ModerationActionType = 
  | 'warn'
  | 'mute'
  | 'suspend'
  | 'ban'
  | 'delete'
  | 'restore';

// User settings
export interface UserSettings {
  userId: string;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  display: DisplaySettings;
  communication: CommunicationSettings;
  updatedAt: string;
}

export interface NotificationSettings {
  email: {
    newsletter: boolean;
    security: boolean;
    mentions: boolean;
    follows: boolean;
    likes: boolean;
    comments: boolean;
  };
  push: {
    mentions: boolean;
    follows: boolean;
    likes: boolean;
    comments: boolean;
    messages: boolean;
  };
  frequency: 'immediate' | 'hourly' | 'daily' | 'weekly' | 'never';
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'friends' | 'private';
  showEmail: boolean;
  showLocation: boolean;
  showSocialLinks: boolean;
  allowDirectMessages: boolean;
  allowFriendRequests: boolean;
  showOnlineStatus: boolean;
  showActivity: boolean;
}

export interface DisplaySettings {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  compactMode: boolean;
}

export interface CommunicationSettings {
  allowMessages: boolean;
  allowGroupInvites: boolean;
  allowMentions: boolean;
  messagePrivacy: 'everyone' | 'friends' | 'nobody';
}

// Export validation for module
export { };

