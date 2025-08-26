// Authentication and authorization types

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneVerified: boolean;
  preferences: UserPreferences;
  roles: Role[];
  permissions: Permission[];
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
  isActive: boolean;
  isOnline: boolean;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: string;
  timezone: string;
  notifications: NotificationPreferences;
  privacy: PrivacySettings;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  sms: boolean;
  marketing: boolean;
  security: boolean;
  updates: boolean;
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends';
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  allowMessages: boolean;
  allowFriendRequests: boolean;
}

// Authentication types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresIn: number;
  expiresAt: string;
}

export interface AuthSession {
  user: User;
  tokens: AuthTokens;
  isAuthenticated: boolean;
  sessionId: string;
  createdAt: string;
  lastActivity: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
  captcha?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  acceptTerms: boolean;
  newsletter?: boolean;
  referralCode?: string;
}

export interface PasswordResetRequest {
  email: string;
  captcha?: string;
}

export interface PasswordResetConfirm {
  token: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface EmailVerificationRequest {
  email: string;
}

export interface EmailVerificationConfirm {
  token: string;
  email: string;
}

// Authorization types
export interface Role {
  id: string;
  name: string;
  description?: string;
  permissions: Permission[];
  isDefault: boolean;
  isSystem: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Permission {
  id: string;
  name: string;
  resource: string;
  action: string;
  description?: string;
  conditions?: Record<string, any>;
}

export interface AccessControl {
  resource: string;
  action: string;
  allowed: boolean;
  reason?: string;
  conditions?: Record<string, any>;
}

// OAuth types
export interface OAuthProvider {
  id: string;
  name: string;
  icon: string;
  authUrl: string;
  scope: string[];
  enabled: boolean;
}

export interface OAuthAccount {
  provider: string;
  providerId: string;
  email?: string;
  name?: string;
  avatar?: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: string;
  connectedAt: string;
}

export interface SocialLoginRequest {
  provider: string;
  code: string;
  redirectUri: string;
  state?: string;
}

// Two-factor authentication types
export interface TwoFactorAuth {
  enabled: boolean;
  method: 'totp' | 'sms' | 'email';
  backupCodes: string[];
  lastUsedAt?: string;
}

export interface TwoFactorSetupRequest {
  method: 'totp' | 'sms' | 'email';
  phoneNumber?: string; // for SMS
}

export interface TwoFactorSetupResponse {
  secret?: string; // for TOTP
  qrCode?: string; // for TOTP
  backupCodes: string[];
}

export interface TwoFactorVerifyRequest {
  code: string;
  method: 'totp' | 'sms' | 'email';
  rememberDevice?: boolean;
}

// Authentication state types
export interface AuthState {
  user: User | null;
  session: AuthSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  lastError: string | null;
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<AuthSession>;
  register: (data: RegisterData) => Promise<AuthSession>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<AuthTokens>;
  resetPassword: (request: PasswordResetRequest) => Promise<void>;
  confirmPasswordReset: (data: PasswordResetConfirm) => Promise<void>;
  changePassword: (data: ChangePasswordData) => Promise<void>;
  verifyEmail: (data: EmailVerificationConfirm) => Promise<void>;
  resendEmailVerification: (request: EmailVerificationRequest) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<User>;
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<UserPreferences>;
  checkPermission: (resource: string, action: string) => boolean;
  hasRole: (roleName: string) => boolean;
}

// Export validation for module
export { };

