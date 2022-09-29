import { useEffect, useState } from "react";
import { getArticles } from "../utils/axios";
import Articles from "./Articles";

const Home = () => {
  return (
    <div>
      <p className="home-para">
        Welcome to Alphaa News, home of what's going on around the world{" "}
      </p>
    </div>
  );
};
export default Home;
