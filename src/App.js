import "./App.css";
import UserContextProvider from "./contexts/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Users from "./components/Users";
import { ThemeContextprovider } from "./contexts/ThemeContext";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { useEffect, useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkMode = () => {
    setThemeMode("dark");
  };
  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(()=>{
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
        <Users />
      </UserContextProvider>

      <ThemeContextprovider value={{ themeMode, darkMode, lightMode }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextprovider>
    </>
  );
}

export default App;
