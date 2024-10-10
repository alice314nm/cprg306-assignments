"use client"

import Item from "./item";
import React, { useState } from 'react';
import items from './items.json';

export default function ItemList(){

  const [itemList, setItemList] = useState(items);
  const [sortBy, setSortBy] = useState("name");
  const buttonStyle="rounded bg-rose-600 p-2 hover:bg-rose-800"

  function handleSort(filter) {
    
    let sortedItems;
    setSortBy(filter)

    if (sortBy === "name") {
      sortedItems = items.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (sortBy === "category") {
      sortedItems = items.sort((a, b) => a.category > b.category ? 1 : -1);
    }

    setItemList(sortedItems);
  }


  return (
    <div className="flex flex-col gap-5">
      <div className="ml-5 flex items-center gap-3 text-white">
        <p className="text-rose-900">Sort by:</p>
        <button type="button" onClick={() => handleSort("name")} value="name" className={buttonStyle}>Name</button>
        <button type="button" onClick={() => handleSort("category")} value="category" className={buttonStyle}>Category</button>
      </div>
      <div>
        <ul>
          {itemList.map((item)=>(
            <li key={item.index}>
              <Item name={item.name}
                  category={item.category} 
                  quantity={item.quantity}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}