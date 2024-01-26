import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateLogin } from "../security/CreateLogin";
import { DeleteLogin } from "../security/DeleteLogin";
import { SignIn } from "../security/SignIn";
import { SignOut } from "../security/SignOut";
import { Home  } from "../home/Home";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createLogin" element={<CreateLogin />} />
        <Route path="/deleteLogin" element={<DeleteLogin />} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/signOut" element={<SignOut/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
