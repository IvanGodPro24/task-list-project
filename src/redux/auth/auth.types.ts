export type User = {
  name: string | null;
  email: string | null;
};

export type AuthState = {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
};