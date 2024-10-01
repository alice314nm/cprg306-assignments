"use client"

import { useState } from "react";

export default function NewItem(){
    
    const [quantity, setQuantity] = useState(1);

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

    const buttonStyle = "w-8 font-bold border rounded text-white bg-rose-600 hover:bg-rose-800 disabled:bg-rose-200";

    let decrementState = false;
    let incrementState = false;

    if(quantity==1){
        decrementState = true;
    }
    else if(quantity==20){
        incrementState = true;
    }
   

    return(
        <div className="w-36 m-3 p-3 bg-rose-50 border rounded border-rose-900">
            <div className="flex justify-between">
                <p className="text-rose-900">{quantity}</p>
                <div className="flex gap-1">
                    <button disabled={decrementState} onClick={decrement} className={buttonStyle}>-</button>
                    <button disabled={incrementState} onClick={increment} className={buttonStyle}>+</button>
                </div>
            </div>
        </div>
    );
}