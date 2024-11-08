"use client"


import { useState, useEffect } from "react";
import Link from "next/link";

import { useUserAuth } from "../_utils/auth-context";
import MealIdeas from "./meal-ideas";
import ItemList from "./item-list";
import NewItem from "./new-item";
import { dbGetItemsByUser } from "../_services/shopping-list-service";


export default function Page() {
  
  const [itemList, setItemList] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const { user }  = useUserAuth();

  useEffect(() => {

    if(user){
        dbGetItemsByUser(user.uid, setItemList)
    }

    }, [user]
)

  if(!user){
    return (
      <div>
        <p>You must be logged in</p>
        <Link href="/week-9/"></Link>
      </div>
    )
  }

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
            <NewItem itemListSetter={setItemList}/>
            <MealIdeas ingredient={ingredient}/>
          </div>
        </div>
      </main>
    );
  }