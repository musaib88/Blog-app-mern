// import Home from "./pages/home/Home";

import Register from "./pages/register/Register";

import Login from "./pages/login/Login";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/Single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";

function App() {
  const user =false;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            path='/single/:postId'
            element={<Single />}
          />
          <Route
            path='/login'
            element={user?<Home/>:<Login />}
          />
          <Route
            path='/register'
            element={user ?<Home/>:<Register />}
          />
          <Route
            path='/settings'
            element={user?<Settings />:<Login/>}
          />
          <Route
            path='/write'
            element={user?<Write />:<Login/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
