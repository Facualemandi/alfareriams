import { Routes, Route } from "react-router-dom";
import { ProviderContext } from "./context/context";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import EnterWeb from "./pages/EnterWeb/EnterWeb";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ProviderContext>
      <Routes>
        <Route path="/" element={<EnterWeb/>}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </ProviderContext>
  );
}

export default App;
