import React from 'react'
import Header from './components/Header'
import SummaryExpenses from './components/SummaryExpenses'
import TransactionForm from './components/TransactionForm'

const App = () => {
  return (
    <main className='container'>
     <Header />
     <SummaryExpenses />
     <TransactionForm />
    </main>
  )
}

export default App