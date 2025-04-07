export type AuthResponse = {
  user: {
    name: string;
    email: string;
  };
  token: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
};
