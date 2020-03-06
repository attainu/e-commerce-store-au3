import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCategories } from "../store/categories/actions/categories.actions";
import Animation from "./Animation";

const Home = () => {
  const dispatch = useDispatch();
  const [finish, setFinish] = useState(false);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <img
        src="https://i.ibb.co/XVWy2Gk/i-Mac-1finalcover-1.png"
        className="img-fluid"
        alt=""
        onLoad={e => setFinish(true)}
      />
      {!finish ? <Animation /> : null}
    </div>
  );
};

export default Home;
