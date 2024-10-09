"use client"

import Item from "./item";
import React, { useState } from 'react';
import items from './items.json';

export default function ItemList(){

  const [itemList, setItemList] = useState(items);
  const buttonStyle="rounded bg-rose-600 p-2 hover:bg-rose-800"
  return (
    <div className="flex flex-col gap-5">
      <div className="ml-5 flex items-center gap-3 text-white">
        <p className="text-rose-900">Sort by:</p>
        <button type="button" className={buttonStyle}>Name</button>
        <button type="button" className={buttonStyle}>Category</button>
        <button type="button" className={buttonStyle}>Grouped Category</button>
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