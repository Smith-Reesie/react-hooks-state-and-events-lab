import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

const [isDarkMode, setIsDarkMode] = useState(false)

function handleToggle() {
  setIsDarkMode(!isDarkMode)
}


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"
  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggle}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;






































// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false)
  
//   function changeClassState() {
//     setIsDarkMode(!isDarkMode)
//   }
  
//     // replace 'false' with a state variable that can be toggled between true and false
//     // this will be used for the Dark Mode Toggle feature
//     const appClass = isDarkMode ? "App dark" : "App light"
//     const darkModeText = isDarkMode ? 'Light Mode' : 'Dark Mode'
  
//     return (
//       <div className={appClass}>
//         <header>
//           <h2>Shopster</h2>
//           <button className={appClass} onClick={changeClassState}> {darkModeText}</button>
//         </header>
//         <ShoppingList items={itemData} />
//       </div>
//     );
//   }
  
//   export default App;
  