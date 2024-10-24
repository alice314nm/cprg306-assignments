"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import items from './items.json';
import { useState } from "react";

export default function Page() {
  
  const [itemList, setItemList] = useState(items);

  const handleAddItem = (item) => {
    setItemList([...itemList, item]);
  };

  return (
      <main>
        <h1 className="m-5 text-2xl font-bold text-rose-900">Shopping List</h1>
        <div className="flex flex-col-reverse md:flex-row gap-5">
          <ItemList items={itemList} />
          <NewItem onAddItem={handleAddItem} />
        </div>
      </main>
    );
  }