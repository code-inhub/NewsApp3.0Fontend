import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Bookmarks from "./components/Bookmarks";

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [category, setCategory] = useState([]);
  const [email, setEmail] = useState("");
  // const [isSignup, setIsSignup] = useState(false);

  return (

    <BrowserRouter>
     <div
  //  {/*  style={{
  //     // marginTop:"-50px",
  //     height:"100%",
  //     width:"100%",
  //   backgroundImage:
  //     'url("https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=1060&t=st=1692654278~exp=1692654878~hmac=e304cb64d4ab0af5d61867700a97e29b0b7ee8e1b9c02364e2f6f532a23a626a") no-repeat top center fixed ',
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",*/} 
//  }}
  >
    { !isLogin && 
      <Route exact path="/">
        <Login setLogin={setIsLogin} setEmail={setEmail} setCategory={setCategory} />
      </Route>
    }

     {
      <Route exact path="/signup">
        <Signup />
      </Route>
     }
    {
      
    isLogin
        &&
        <div>
          <Navbar category={category}/>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={progress}
            />
          <Route exact path="/">
            <News
              setProgress={setProgress}
              key="general"
              pageSize={50}
              country="in"
              category="general"
              email = {email}
              />
          </Route>
          <Route exact path="/General">
            <News
              setProgress={setProgress}
              key="general"
              category="general"
              email = {email}
              />
          </Route>
          ;
          <Route exact path="/business">
            <News
              setProgress={setProgress}
              key="business"
              category="business"
              email = {email}
              />
          </Route>
          <Route exact path="/entertainment">
            <News
              setProgress={setProgress}
              key="entertainment"
              category="entertainment"
              email = {email}
            />
          </Route>
          <Route exact path="/health">
            <News
              setProgress={setProgress}
              key="health"
              category="health"
              email = {email}
              />
          </Route>
          <Route exact path="/science">
            <News
              setProgress={setProgress}
              key="science"
              category="science"
              email = {email}
              />
          </Route>
          <Route exact path="/sports">
            <News
              setProgress={setProgress}
              key="sports"
              category="sports"
              email = {email}
              />
          </Route>
          <Route exact path="/technology">
            <News
              setProgress={setProgress}
              key="sports"
              category="technology"
              email = {email}
              />
          </Route>
          <Route exact path="/finance">
            <News
              setProgress={setProgress}
              key="Finance"
              category="finance"
              email = {email}
              />
          </Route>

          <Route exact path="/politics">
            <News
              setProgress={setProgress}
              key="sports"
              category="politics"
              email = {email}
              />
          </Route>
          <Route exact path="/fashion">
            <News
              setProgress={setProgress}
              key="sports"
              category="fashion"
              email = {email}
              />
          </Route>
          
          <Route exact path="/bookmark">
            <Bookmarks
              setProgress={setProgress}
              key="bookmark"
              email = {email}
              />
          </Route>
          
        </div>
     }
      </div>
     </BrowserRouter>

 );
};

export default App;


