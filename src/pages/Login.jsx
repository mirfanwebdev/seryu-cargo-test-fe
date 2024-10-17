import { redirectToTMDBLogin, getRequestToken } from "../api/auth";
import tmdb from "../assets/tmdb.png";
function Login() {
  const handleLogin = async () => {
    try {
      const data = await getRequestToken();
      const requestToken = data.request_token;
      localStorage.setItem("request_token", requestToken);
      redirectToTMDBLogin(requestToken);
    } catch (error) {
      console.error("Error getting request token:", error);
    }
  };
  return (
    <div
      className="w-full h-full absolute top-0"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
      }}
    >
      <button
        className="flex flex-col items-center gap-2 p-4 md:p-8 md:py-6 mx-auto mt-[20%] bg-white rounded-2xl"
        onClick={handleLogin}
      >
        <img src={tmdb} alt="logo" className="w-[80px] md:w-[160px]" />
        <p className="text-black">Login with TMDB</p>
      </button>
    </div>
  );
}

export default Login;
