import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Libary from "./pages/library";
import History from "./pages/history";
import Login from "./pages/login";
import { UserStorage } from "./contexts/userContext";

//contexto geral: react hooks parte 7 e 8 (iniciando no react)


function App() {
  return (
    <UserStorage>
      <BrowserRouter>
        <div className="App">
        <Header/>

          <div style={{width: '100%', display: 'flex'}}>
            <Menu/>
            <div style={{ width: '100%', marginTop: '55px', padding: '50px 70px', boxSizing: 'border-box'}}>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/library" element={<Libary/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/Login" element={<Login/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
