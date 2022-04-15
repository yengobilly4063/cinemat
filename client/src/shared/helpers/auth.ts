export const accessTokenKey = "accessToken";
export const sessionToken = "sessionToken";

export const getAccessToken = () => {
  return localStorage.getItem(accessTokenKey);
};

export const storeAccessToken = (token: string) => {
  localStorage.setItem(accessTokenKey, token);
};

export const isAuthToken = () => {
  return !!getAccessToken();
};
