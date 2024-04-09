import { useContext } from "react";
import './App.css';
import Body from './components/Body';
import SideNav from './components/SideNav';
import { ThemeContext } from './Theme';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <SideNav />
        <Body />      
        <Routes>
            <Route path="/" element={<Navigate to="/"/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
