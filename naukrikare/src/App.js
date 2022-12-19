import logo from './logo.svg';
import React from "react"
import './App.css';
import AllRouters from './Components/AllRouters';

import { AppContext } from './Context/AuthContextProvider';


function App() {
  const Styles = {
    dark: {
      
      background: "rgba(0, 0, 0, 0.64)"
    },
    light: {
   
      background: "white"
    }
  };
  const {theme,togggleTheme}=React.useContext(AppContext)
  return (
   
    <div className="App"  style={theme === "Light" ? Styles.dark : Styles.light}>
     <AllRouters/>

    </div>
   
  );
}

export default App;
