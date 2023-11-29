// import Home from "./pages/home/Home";

import Register from "./pages/register/Register";

import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/Single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import { useSelector} from "react-redux/es/hooks/useSelector";

function App() {
  
const user=useSelector((state)=>state.user.user)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home user={user}/>}
          />
          <Route
            path='/post/:postId'
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
