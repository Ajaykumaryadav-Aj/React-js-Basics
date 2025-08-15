import "./App.css";
import ChildA from "./components/ChildA";
import { createContext, useState } from "react";

// step:1 create Context
// const UserContext = createContext();
// step:2 wrap all the child inside a provider
// step:3 pass value
// step:4 consumer k andar jaake consume krlo

const ThemeContext = createContext();

function App() {
  // const [user, setUser] = useState({ name:"Ajay" });

  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
       <div id="container" style={{backgroundColor: theme==='light'?'beige' : 'black'}}> 
        <ChildA />
       </div>
      </ThemeContext.Provider>

      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </>
  );
}

export default App;
// export { UserContext };
export { ThemeContext };
