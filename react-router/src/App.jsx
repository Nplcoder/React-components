import { Link, Navigate, NavLink, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./pages/Header";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import College from "./pages/College";
import Users from "./pages/Users";
import List from "./pages/List";
import Students from "./pages/College-Details/Students";
import Department from "./pages/College-Details/Department";
import Details from "./pages/College-Details/Details";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      {/* <Header /> */}

      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />

          {/* Prefixes Route */}
          <Route path='uae'>
          <Route path='/uae/user'>
          <Route path="/uae/user/login" element={<Login />} />
          </Route>
          </Route>

          {/* <Route path='/users/:id' element={<UserDetails/>}/> */}

          <Route path="/about" element={<About />} />
          
          <Route path="/users/list?" element={<Users />} />
          <Route path="/users/:id/:name?" element={<UserDetails />} />


          {/* <Route path="/list" element={<List />} /> */}
        </Route>

        {/* Nested Route */}
        <Route path="/college" element={<College />}>
          <Route index element={<Students />} />
          <Route path="department" element={<Department />} />
          <Route path="detail" element={<Details />} />
        </Route>

        <Route path='/*' element={<PageNotFound/>} />
        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default App;
