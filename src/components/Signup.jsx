import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([
    'General',
  ]);   

  const categoriesOptions = [
    'General',
    'Business',
    'Entertainment',
    'Health',
    'Science',
    'Sports',
    'Technology',
    'Finance',
    'Politics',
    'Fashion',
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleSignup = async () => {
    if (password !== checkPassword) {
      alert('Passwords do not match');
      return;
    }
    if (email.trim() === '' || password.trim() === '') {
      alert('Email or password cannot be empty');
      return;
    }
    if (selectedCategories.length === 0) {
      alert('Please select at least one category');
      return;
    }

    const user = {
      email,
      password,
      categories: selectedCategories,
    };

    try {
      const url = 'https://newsapp3-0backend.onrender.com';
      const response = await axios.post(`${url}/addUser`, user);
      if(response.data ==="User already exists") {
        alert('User already exists');
        
      }
      console.log('User added successfully:', response.data);

      setEmail('');
      setPassword('');
      setCheckPassword('');
      setSelectedCategories(['General']);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6" style={{ marginTop: '5%' }}>
          <h2>SignUp</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder=" Confirm Password"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
          </div>

          <h4>Category Selection :</h4>
          {categoriesOptions.map((category, index) => (
            <div className="mb-3 form-check" key={index}>
              <input
                type="checkbox"
                className="form-check-input"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              <label className="form-check-label">{category}</label>
            </div>
          ))}


              <a href='/'>
              <button className="btn btn-primary mb-4" onClick={handleSignup}>
            Create Account
          </button>
            </a>

        </div>
      </div>
    </div>
  );
}

export default Signup;
