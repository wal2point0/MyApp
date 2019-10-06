import React, { Component } from 'react';
import './foodlist.css'
import {FoodItem} from './foodItem';


export class FoodList extends Component {


    render() {

        const foods = [
            {name: "Plantain", id:1} ,
            {name: "Gizard", id:2} ,
            {name: "Chicken", id:3} 
        ];
        

        // const listItems = foodItems.map(food => <li>{food}</li>);
        
        //    const listItems = [<FoodItem foodName="Rice"></FoodItem>, <FoodItem foodName="Peas"></FoodItem>  ];

        const listItems = foods.map(food => <FoodItem foodName={food.name} foodId={food.id} ></FoodItem>)

        return (
            <div>
                <h1 id="list">{listItems}</h1>
            </div>
        );
    }


}

