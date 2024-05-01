import './App.css'
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx"
import RegisterPage from "./pages/RegisterPage.jsx";
import { Routes,Route,Navigate } from "react-router-dom";
function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Navigate replace to="/login"/>}/>
<Route path="/login" element={<LoginPage/>} />
<Route path="/register" element={<RegisterPage/>} />
<Route path="/home" element={<Home/>} />
</Routes>
    </>
  )
}

export default App
