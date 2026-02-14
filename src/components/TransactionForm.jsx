import React from 'react'

const TransactionForm = () => {
  return (
    <section className='card'>
     <form>
        <input placeholder='Title' required />
        <input placeholder='Amount' required />
        <select>
            <option value="expense"> Expense</option>
            <option value="income"> Income</option>
        </select>
        <input placeholder='Category' required />
        <button type='submit' className='btn'> Add</button>
     </form>
    </section>
  )
}

export default TransactionForm