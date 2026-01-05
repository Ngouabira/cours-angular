export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  active: boolean;
  roles: string[];
}
