import React, {useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import {
getGeneral,
getBusiness,
getEntertainment,
getHealth,
getScience,
getSports,
getTechnology,
getFinance,
getPolitics,
getFashion,
 
} from "../routes/route.js";

 function News({category,setProgress,email}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setCategory1(category);
    console.log(category);
    updateNews();
  }, [category]); 

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // console.log(category);
  
  
  
  const updateNews = async () => {
    setProgress(10);
    
    let data;
   
    switch(category){
      case "general":
        try {
          data = await getGeneral();
          // console.log(data);
        } catch (error) {
          console.log(error);
        }
        break;
      case "business":
        try {
          data = await getBusiness();
        } catch (error) {
          console.log(error);
        }
        break;
      case "entertainment":
        try {
          data = await getEntertainment();
        } catch (error) {
          console.log(error);
        }
        break;
        case "health":
          try {
            data = await getHealth();
          } catch (error) {
            console.log(error);
          }
          break;
          case "science":
            try {
              data = await getScience();
            } catch (error) {
              console.log(error);
            }
            break;
            case "sports":
              try {
                data = await getSports();
              } catch (error) {
                console.log(error);
              }
             break;
      case "technology":
        try {
        data = await getTechnology();
      } catch (error) {
        console.log(error);
      }
      break;
      case "finance":
        try {
        data = await getFinance();
      } catch (error) {
        console.log(error);
      }
      break;
      case "politics":
        try {
          data = await getPolitics();
        } catch (error) {
          console.log(error);
        }

        break;
        case "fashion":
          try {
            data = await getFashion();
          } catch (error) {
            console.log(error);
          }
          break;
          default:
            break;
          }
        
          if (data){
            setProgress(30);
            
          
          let parsedData = data[0];
          // console.log(parsedData);
          setProgress(70);
          
          setArticles(parsedData.articles);
          
          setProgress(100);
          setLoading(false);}
        }

        return(
          <>
      <br />
      <h2 className="text-center mt-5" style={{ marginTop: "3rem" }}>
        TheMonk - Top Headlines from{" "}
        {capitalizeFirstLetter(category)}
      </h2>
      <div className="text-center">{loading && <Spinner />}</div>
      
        <div className="container ">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                  email = {email}
                  category="news"
                />
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}

export default News;
