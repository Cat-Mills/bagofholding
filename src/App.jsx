import { useState } from 'react'
import Table from './components/Table.jsx'
import './App.css'


function App({initialData}) {

  return <Table initialInventory={initialData}/>
  //passing initialInventory as a prop to the Table

}

export default App
