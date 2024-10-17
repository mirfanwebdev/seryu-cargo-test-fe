import { apiBaseUrlv4, getAccessHeader } from "./config";
export const getRequestToken = async () => {
  try {
    const response = await fetch(`${apiBaseUrlv4}/auth/request_token`, {
      method: "POST",
      headers: getAccessHeader(),
      body: JSON.stringify({
        redirect_to: window.location.origin + "/auth/callback",
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getToken = async (reqToken = "") => {
  try {
    const response = await fetch(`${apiBaseUrlv4}/auth/access_token`, {
      method: "POST",
      headers: getAccessHeader(),
      body: JSON.stringify({
        request_token: reqToken,
      }),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const redirectToTMDBLogin = (requestToken) => {
  const url = `https://www.themoviedb.org/auth/access?request_token=${requestToken}
  )}`;
  window.location.href = url;
};
