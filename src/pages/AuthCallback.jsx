import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../api/auth";

function AuthCallback() {
  const navigate = useNavigate();

  const handleToken = async (requestToken) => {
    try {
      const data = await getToken(requestToken);
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("account_id", data.account_id);
      localStorage.removeItem("request_token");
      navigate("/");
    } catch (error) {
      console.error("Error getting token:", error);
    }
  };

  useEffect(() => {
    const requestToken = localStorage.getItem("request_token");

    if (requestToken) {
      handleToken(requestToken);
    }
  }, []);
  return (
    <>
      <h1>redirecting...</h1>
    </>
  );
}

export default AuthCallback;
