import React, { Component } from 'react';
import './foodItem.css'

type foodItemProps = {
    foodName: string;
    foodId: Number;
}

export class FoodItem extends Component<foodItemProps> {

    constructor (props: foodItemProps) {
        super(props);
    }

    render(){
        return (
                <div>
                    <span>{this.props.foodName}</span>
                    <span>{this.props.foodId}</span>
                </div>
            )

    }
} 