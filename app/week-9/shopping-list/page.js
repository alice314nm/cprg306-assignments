"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from './items.json';
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  
  const [itemList, setItemList] = useState(items);
  const [ingredient, setIngredient] = useState("");


  const handleAddItem = (item) => {
    setItemList([...itemList, item]);
  };

  const handleItemSelect = (selectedItem) => {
    let selectedIngredient = selectedItem.name.split(" ")[0]
    selectedIngredient = selectedIngredient.split(',')[0]; 

    selectedIngredient = String(selectedIngredient);

    if (selectedIngredient.endsWith('s')) {
      selectedIngredient = selectedIngredient.slice(0, -1);
    }

    selectedIngredient = selectedIngredient.charAt(0).toUpperCase() + selectedIngredient.slice(1);

    setIngredient(selectedIngredient);
  };

  return (
      <main>
        <h1 className="m-5 text-2xl font-bold text-rose-900">Shopping List</h1>
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <ItemList items={itemList} onItemSelect={handleItemSelect}/>
          <div>
            <NewItem onAddItem={handleAddItem}/>
            <MealIdeas ingredient={ingredient}/>
          </div>
        </div>
      </main>
    );
  }