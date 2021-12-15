import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log("updated !");

    const clickHandler = () => {
        setTitle('Gule DA');
        console.log(title);
    };

    return (
        <li>
            <Card className="expense-item">

                <ExpenseDate date={props.date} />

                <div className="expense-item__description">

                    <h2>{title}</h2>
                    <div className="expense-item__price"> INR{props.amount}/Month</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </li>
    );

}
export default ExpenseItem;

/*import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;*/