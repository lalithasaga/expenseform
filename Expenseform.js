

import React, { useState } from 'react';


function ExpenseForm() {
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('');
const [date, setDate] = useState('');

function handleTitleChange(event) {
const newTitle = event.target.value;
setTitle(newTitle);
console.log('Title:', newTitle);
}

function handleAmountChange(event) {
const newAmount = event.target.value;
setAmount(newAmount);
console.log('Amount:', newAmount);
}

function handleDateChange(event) {
const newDate = event.target.value;
setDate(newDate);
console.log('Date:', newDate);
}

return (
<div>
<input type="text" placeholder="Expense Title" value={title} onChange={handleTitleChange} />
<input type="number" placeholder="Expense Amount" value={amount} onChange={handleAmountChange} />
<input type="date" value={date} onChange={handleDateChange} />
<button>Add Expense</button>
</div>
);
}

export default ExpenseForm;