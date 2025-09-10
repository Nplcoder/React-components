import { useState } from "react";
import "./App.css";
import Title from "./Title";
import Checkout from "./Checkout";
import { UserProvider } from "./context/UserContext";
import Login from "./Login";
import Logout from "./Logout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">
        <Title />
        <UserProvider>
          <Login />
          <Checkout />
          <Logout />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
