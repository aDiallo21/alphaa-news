import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import SingleArticle from "./components/SingleArticle";
import { Comments } from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/topics/:topic_slug" element={<Articles />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/articles/:article_id/comments" element={<Comments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
