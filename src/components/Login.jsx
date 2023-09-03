import React,{useState} from 'react'
import { CheckLogin } from '../routes/route';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

function Login({setLogin,setCategory,setEmail}) {
    // setLogin(true);
    const [email, setEmailIn] = useState('');
  const [password, setPassword]  = useState('');
    const [loading,setLoading] = useState(false);

    
    console.log("login");

    const handleLogin = async() => {
      try {
           setLoading(true);
        const res= await CheckLogin({email,password});
 
        if(res.data === "success"){
          setLogin(true);
          setEmail(email);
          console.log(res.category)
          setCategory(res.category)
          setLoading(false);            
        }

        else{
          setLoading(false);
          setEmailIn("");
          setPassword("");            
          alert("incorrect credentials");
        }
      }
      catch(err){
        console.log(err);
      }
        
    }

      return (
        <>
        <div className="container" >
          <div className="row justify-content-center mt-5">
           <div className="text-center">{loading && <Spinner />}</div>
            <div className="col-md-6 " style={{marginTop:"10%"}}>
              <h2>Login</h2>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmailIn(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
               
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
                <Link to="/signup" style={{ marginLeft: '20px' }}>
              Are you a new user?
            </Link>
            </div>
          </div>
      
        </div>
      </>
      
      );
    };
    
    export default Login;
