export const apiBaseUrlV3 = import.meta.env.VITE_API_URL_V3;
export const apiBaseUrlv4 = import.meta.env.VITE_API_URL_V4;
export const apiKey = import.meta.env.VITE_API_KEY;
export const accessTokenAuth = import.meta.env.VITE_ACCESS_TOKEN_AUTH;

export const defaultHeader = {
  "Content-Type": "application/json",
};

export const getAccessHeader = () => {
  const accessToken = accessTokenAuth;
  if (accessToken) {
    return {
      Authorization: `Bearer ${accessToken}`,
      ...defaultHeader,
    };
  }
  return defaultHeader;
};

export const getAuthHeader = () => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      ...defaultHeader,
    };
  }
  return defaultHeader;
};
