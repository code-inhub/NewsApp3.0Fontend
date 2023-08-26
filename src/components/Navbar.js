import React from "react";
import { Link } from "react-router-dom";
import img from "../save.png"

function Navbar({ category }) {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid  ">
          <Link className="navbar-brand" to="/general">
            <h5 className="hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
              The Monk
            </h5>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
               {
                 category.map((item)=>{
                   return(
                     <li className="nav-item">
                     <Link
                  className="nav-link active"
                  aria-current="page"
                  to = {`/${item}`}
                >
                 {item} {" "}
                </Link>
                </li>
                  )
                })
               }
            </ul>
           <Link to={"/bookmark"}>
              <h7 style={{color:"white",marginRight:"10px"}}>Bookmark</h7>
            <img src={img} alt="img"  className="" style={{ height:"24px ",backgroundColor:"white", cursor:"pointer"}} />
           </Link>

          </div>
          
        </div>
      </nav>
    </div>
  );
}


export default Navbar;
