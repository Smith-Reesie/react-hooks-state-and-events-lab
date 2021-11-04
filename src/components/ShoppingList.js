import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [ selectedCategory, setSelectedCategory] = useState('All')

  const filterCategory = items.filter(item => {
    return selectedCategory === 'All' || selectedCategory === item.category})

  function handleChange(e){
    setSelectedCategory(e.target.value)
  }

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;



























// import React, {useState} from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   const [selectedCategory, setSelectedCategory]=useState('All')

//   function handleChange(e){
//     setSelectedCategory(e.target.value)
//   }

//   const filteredItems = items.filter(item => {
//   return  selectedCategory === 'All' || item.category === selectedCategory
//   })




//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select onChange={handleChange} name="filter">
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//       {filteredItems.map((item) => (<Item key={item.id} name={item.name} category={item.category} />
//       ))
// }
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;
