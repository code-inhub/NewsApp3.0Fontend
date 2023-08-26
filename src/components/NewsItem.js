import React,{useEffect, useState} from "react";
import img from "../bookmark.png";
import img1 from "../unbookmark.png";
import { addBookmark,removeBookmark,checkForBookmark } from "../routes/route";


const NewsItem = (props) => {
  const {
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    email,
    category,
    setArticles,
  } = props;

  console.log(category);
  const [bookmark, setBookmark] = useState(category==="bookmark"?true:false);

  const [isDelete, setIsDelete] = useState(false);

  const checkBookmark=async(url,email)=>{
    const isBookmark= await checkForBookmark(url,email);
    console.log(isBookmark);
    !bookmark&&setBookmark(isBookmark);
    }
 
 useEffect(() => {
   checkBookmark(newsUrl,email);
  }, []);

 const BookmarkTrue = () => {
       if(!bookmark){callingAddBookmark({email})}
       setBookmark(true);
       
 }

  const callingAddBookmark = () => {
     const data = { title, description, imageUrl, newsUrl, author, date, source,email };
      addBookmark(data);
      // console.log(data);

  };

  const removeBookmarkFunc = async() => {
    console.log(email)

    const data = await removeBookmark(newsUrl,email);
     setArticles(data);
    setIsDelete(false);
    setBookmark(false);
  }


  return (
    <div className="my-3">
      <div className="card" style={{visibility:isDelete&&"hidden"}} >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{
              zIndex: "3",
              left: "90%",
            }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>{" "}
        </div>
        <img
          src={
            !imageUrl
              ? "https://www.adobe.com/express/learn/blog/media_18051b9422b3e398d9f45fde08922c059d7b90737.png?width=2000&format=webply&optimize=medium"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body" >
          <h5 className="card-title">{title}...</h5>

          <p className="card-text">{description}... </p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} className="btn btn-dark">
            Read More
          </a>
          {/* if(isBookmark){  */}
       {bookmark  &&  <img
            alt="bookmark"
            src={img}
            style={{
              height: "36px",
              width: "30px",
              color: "black",
              float: "right",
              cursor: "pointer",
            }}
            onClick={category==="bookmark"?removeBookmarkFunc:BookmarkTrue} 
            
          />}
       {!bookmark  &&  <img alt="bookmark" src={img1}  className="" style={{ marginTop:"5px" ,height:"28px", color:"black" , float:"right",cursor:"pointer"}}
        onClick={BookmarkTrue}
       />}
          
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
