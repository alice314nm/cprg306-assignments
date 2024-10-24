"use client"

import Item from "./item";
import React, { useState } from 'react';

export default function ItemList({ items }){
  const [sortBy, setSortBy] = useState("name");
  let sortedItems = getSortedItems(sortBy);
  const buttonStyle="rounded bg-rose-600 p-2 hover:bg-rose-800 disabled:bg-rose-800"
  
  let nameSortState = true;
  let categorySortState = false;

  if(sortBy=='name'){
    nameSortState = true;
    categorySortState = false;

  }
  else if(sortBy=='category'){
    nameSortState = false;
    categorySortState = true;
  }

  function getSortedItems(filter) {
    let itemsCopy  = [...items];

    if (filter  === "name") {
      return itemsCopy = itemsCopy.sort((a, b) => a.name > b.name ? 1 : -1);
    } 
    else if (filter  === "category") {
      return itemsCopy = itemsCopy.sort((a, b) => a.category > b.category ? 1 : -1);
    }

    return itemsCopy;
  }

  const handleSort = (filter) => {
    setSortBy(filter);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="ml-5 flex items-center gap-3 text-white">
        <p className="text-rose-900">Sort by:</p>
        <button type="button" disabled={nameSortState} onClick={() => handleSort("name")} value="name" className={buttonStyle}>Name</button>
        <button type="button" disabled={categorySortState} onClick={() => handleSort("category")} value="category" className={buttonStyle}>Category</button>
      </div>
      <div>
        <ul>
          {sortedItems.map((item)=>(
            <li key={item.id}>
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