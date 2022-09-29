import { getTopics } from "../utils/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Topics() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
      setLoading(false);
    });
  }, []);

  return (
    <main>
      <div>
        <p className="topic-msg">Click each topic to filter the articles</p>
        {loading ? (
          <h1>"Loading... please wait"</h1>
        ) : (
          topics.map((topic) => {
            return (
              <p>
                <Link className="link" to={`/articles/topics/${topic.slug}`}>
                  <h3>
                    {topic.slug[0].toUpperCase() + topic.slug.substring(1)}
                  </h3>
                </Link>
                {topic.description}
              </p>
            );
          })
        )}
      </div>
    </main>
  );
}
