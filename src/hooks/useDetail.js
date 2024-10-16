import { useEffect, useState } from "react";
import { getDetail } from "../api";

const useDetail = (id) => {
  const [detail, setDetail] = useState({});

  const handleDetail = async (movieId) => {
    const data = await getDetail(movieId);
    setDetail(data);
  };

  useEffect(() => {
    handleDetail(id);
  }, [id]);

  return { detail };
};

export default useDetail;
