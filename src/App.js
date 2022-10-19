import React, {useState} from "react";
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Game from './Game';


const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuIterms] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if(category==='all'){
      setMenuIterms(items);
      return;
    }
    const newItems = items.filter((item) =>item.category
    ===category);
    setMenuIterms(newItems);
  };

  return (
  <main>
    <section className="menu section">
      <div className="title">
        <h2>Smart Kid Learn</h2>
        <div className="underline"></div>
      </div>
      <Game/>
      <br/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items ={menuItems}/>
    </section>
  </main>
  );
}
export default App;
