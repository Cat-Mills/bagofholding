import { useState } from "react";
import axios from 'axios'
import Rows from "./rows.jsx";
import AddButton from "./addbutton.jsx";
import TableHeader from "./TableHeader.jsx";


const Table = ({initialInventory}) => {

    const [currentList, setCurrentList] = useState(initialInventory)


    async function addRow() {
        let {data} = await axios.post('/addItem', {name: 'Item Name', qty: 1, value: 0, type: 'Item Type'})
        setCurrentList([...currentList, data])
    }


    async function removeItem(id){
        let {data} = await axios.delete(`/removeItem/${id}`)
        if(!data.error){
            const filteredList = currentList.filter(el => el.id !== id)
            setCurrentList(filteredList)
        } else {alert('Why is it sticky?? (error)')}
    }


    const rows = currentList.map((inventoryItem) =>{
        const {id, name, qty, value, type} = inventoryItem
        return (
            <Rows
            key={id}
            id={id}
            initialInventory={{name: name, qty: qty, value: value, type: type}}
            removeItem={removeItem}
            />
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <TableHeader />
                </thead>
                <tbody>
                    {rows}
                </tbody>
                <tfoot>
                    <AddButton addClick={addRow} />
                </tfoot>
            </table>
        </div>
    )
}

export default Table