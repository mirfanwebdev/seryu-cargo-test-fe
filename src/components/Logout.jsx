import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");
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
