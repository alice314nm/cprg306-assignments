"use client"

import React, { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error("Error fetching meal ideas:", error);
        return null;
    }
}


export default function MealIdeas( { ingredient } ){

    const [mealList, setMealList] = useState([]);

    const loadMealIdeas = async () => {
        if (ingredient) {
            const meals = await fetchMealIdeas(ingredient);
            if (meals) {
                setMealList(meals);
            } else {
                setMealList([]);
            }
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return(
        <div>
            <h2 className="ml-5 mt-3 text-xl text-rose-900 mb-2">Meal Ideas with "{ingredient}"</h2>
            {mealList.length > 0 ? (
                <ul>
                    {mealList.map((meal) => (
                        <li key={meal.idMeal} className="bg-rose-50 border-b border-rose-900 p-2 gap-5 ml-5 w-80 hover:bg-rose-200">
                            {meal.strMeal}
                        </li>
                    ))}
                </ul>
            ) : (
                <h2 className="ml-5 mt-3 text-xl text-rose-900">No meals found for the ingredient "{ingredient}"</h2>
            )}
        </div>
    );
}