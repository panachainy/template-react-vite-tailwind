import type { UserInfo } from "./UserInfo";

export interface AuthContextType {
  userInfo: UserInfo | null;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  loginWithLine: () => void;
  refreshAccessToken: () => void;
  logout: () => void;
}
