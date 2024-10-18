import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/getLocalStorage";

function Logout() {
  const navigate = useNavigate();
  const token = getToken();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <>
      {token ? (
        <button onClick={handleLogout}>
          <MdLogout />
        </button>
      ) : null}
    </>
  );
}

export default Logout;
