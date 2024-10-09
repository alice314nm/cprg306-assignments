"use client"

import { useState } from "react";

export default function NewItem(){
    
    const [quantity, setQuantity] = useState(1);

    const [name, setName] = useState("");

    const [category, setCategory] = useState("produce");


    const categoryList = [
        "Produce",
        "Dairy",
        "Bakery",
        "Meat",
        "Frozen Foods",
        "Canned Goods",
        "Dry Goods",
        "Beverages",
        "Snacks",
        "Household",
        "Other",
    ];
    
    const increment = () => {
        let currentQuantity = quantity;

        if (currentQuantity <20){
            setQuantity(currentQuantity+1)
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;

        if (currentQuantity > 1){
            setQuantity(currentQuantity-1)
        }       
    }

    const buttonStyle = "w-8 font-bold rounded text-white bg-rose-600 hover:bg-rose-800 disabled:bg-rose-200";

    let decrementState = false;
    let incrementState = false;

    if(quantity==1){
        decrementState = true;
    }
    else if(quantity==20){
        incrementState = true;
    }
   
    function handleSubmit(event){
        event.preventDefault();

        const item = {
            itemName: name,
            itemQuantity: quantity,
            itemCategory: category,
        }

        console.log(item);
        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category}`);

        setName("");
        setCategory("produce")
        setQuantity(1)
    }

    return(
        <form  onSubmit={handleSubmit} className="inline-flex flex-col gap-5 m-5 border-rose-900 bg-rose-100 p-3 border rounded w-auto">
            {/* Name input */}
            <div>
                <input 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Item name" 
                    required
                    className="border rounded text-rose-900 border-rose-900 w-full p-2 focus:border-rose-200 placeholder:text-rose-200 focus:outline-none"
                />
            </div>

            <div className="flex items-center justify-between gap-5">
                {/* Counter */}
                <div className="w-36 p-3 bg-rose-50 border rounded border-rose-900">
                    <div className="flex justify-between">
                        <p className="text-rose-900">{quantity}</p>
                        <div className="flex justify-between gap-1">
                            <button type="button" disabled={decrementState} onClick={decrement} className={buttonStyle}>-</button>
                            <button type="button" disabled={incrementState} onClick={increment} className={buttonStyle}>+</button>
                        </div>
                    </div>
                </div>

                {/* Category */}
                <div className="text-rose-900">
                    <select 
                        value={category} 
                        onChange={(event) => setCategory(event.target.value)}
                        className="border rounded border-rose-900 p-3.5 w-40 focus:border-rose-200 focus:outline-none">
                        <option value="" className="text-rose-200" disabled={true}>Category</option>
                        {categoryList.map((category, index) => (
                                <option key={index} value={category.toLowerCase()}>
                                    {category}
                                </option>
                        ))}

                    </select>
                </div>

                {/* Button handle */}
                <div>
                    <button className="hover:bg-rose-800 w-20 border rounded border-rose-900 p-3 bg-rose-600 text-white">Add</button>
                </div>

            </div>
        </form>
    );
}