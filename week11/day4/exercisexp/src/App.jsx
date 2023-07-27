import React, { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import ErrorBoundary from "./Components/ErrorBoundary";
import './App.css'
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Shop from './Components/Shop'
import PostList from './Components/PostList'
import data from './Components/data2.json'
import SocialMedias from "./Components/SocialMedias";
import Skills from "./Components/Skills";
import Experiences from "./Components/Experiences";











const App = () => {
  const [fetchData, setData] = useState('')
  const postData = async () => {
    const url = 'https://webhook.site/a2ea8953-c40c-42fb-8667-75361d61c4a3';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


      setData(response)
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  const showData = async () => {
    await postData()

    console.log(fetchData)
  }

  return (
    <BrowserRouter>
      <div>
        <ul>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Shop
          </NavLink>
        </ul>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </ErrorBoundary>
        <PostList />
        <SocialMedias data={data.SocialMedias} />
        <Skills data={data.Skills} />
        <Experiences data={data.Experiences} />
        <button onClick={showData}>Click to me and check the console</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
