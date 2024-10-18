import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../api/auth";
import { getRequestToken } from "../utils/getLocalStorage";
// import { handleToken } from "../utils/handleToken";
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
    const requestToken = getRequestToken();
    if (requestToken) {
      handleToken(requestToken);
    }
  }, []);
  return (
    <>
      <div className="flex items-center justify-center">
        <h1 className="text-xl font-semibold">redirecting...</h1>
      </div>
    </>
  );
}

export default AuthCallback;
