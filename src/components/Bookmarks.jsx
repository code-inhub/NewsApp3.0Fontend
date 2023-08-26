import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import { getBookmark } from "../routes/route";

function Bookmarks({ setProgress, email }) {
  setProgress(10);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    let data = await getBookmark(email);
    console.log("hi");
    console.log("email", email);
    setProgress(30);
    console.log("printing data");
    console.log(data);

    if (data && data.length > 0) {
      setProgress(70);
      setArticles((prevArticles) => [...prevArticles, ...data]);
      setLoading(false); 
      setProgress(100);
    } else {
      setLoading(false); 
      setProgress(100);
    }
  };  

  return (
    <>
      <br />
      <h2 className="text-center mt-5" style={{ marginTop: "3rem" }}>
        TheMonk
        <br />
      </h2>

      <h3>{capitalizeFirstLetter("Your Bookmarks")}</h3>
      <div className="text-center">{loading && <Spinner />}</div>

      <div className="container">
        <div className="row">
          {articles.length > 0 ? (
            articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.imageUrl}
                  newsUrl={element.newsUrl}
                  author={element.author}
                  date={element.date} 
                  source={element.source}
                  email={email}
                  category="bookmark"
                  setArticles={setArticles}
                />
              </div>
            ))
          ) : (
            <h3 style={{
              marginTop: "5rem",
              display: "flex",
              justifyContent: "center",
            }} >No Bookmarks Added Yet</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Bookmarks;
