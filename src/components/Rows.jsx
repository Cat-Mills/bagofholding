import { useState } from "react";
import React from "react";
import axios from "axios";



export default function Rows({initialInventory,id,removeItem, }) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(initialInventory.name)
    const [qty, setQty] = useState(initialInventory.qty)
    const [value, setValue] = useState(initialInventory.value)
    const [type, setType] = useState(initialInventory.type)

    function changeEditMode(){setIsEditing(true)}

    async function editItem(){

        let bodyObj = {
            name,
            qty,
            value,
            type
        }
        console.log({type})
        const {data} = await axios.put(`/editItem/${id}`,
        bodyObj)
        if(!data.err){
            setIsEditing(false)
        } else {alert('We rolled a 1! (error)')}
    }


    return isEditing ? (
        <tr>
            <td>
                <button id="save"
                onClick={() => {
                    setIsEditing(false)
                    editItem()}}>Save
                </button>
                <button id="delete"
                onClick={() => {
                    setIsEditing(false)
                    removeItem(id)}}>Delete
                </button>
            </td>
            <td>
                <input 
                type="text"
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                />
            </td>
            <td>
                <input 
                type="number"
                value={qty}
                onChange={(evt) => {setQty(evt.target.value)}}
                />
            </td>
            <td>
                <input 
                type="number"
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                />
            </td>
            <td>
        <select name="type" id="type" onChange={(e) => {setType(e.target.value)}}> 
            <option value={type}>Type</option> 
            <option value="Weapon">Weapon</option> 
            <option value="Tool">Tool</option> 
            <option value="Supplies">Supplies</option> 
            <option value="Ammo">Ammo</option> 
            <option value="Misc">Misc</option> 
        </select>
                {/* <input
                type="text"
                value={type}
                onChange={(e) => {setType(e.target.value)}}
                /> */}
            </td>
        </tr>
    ) : (
        <tr>
            <td><button onClick={() => setIsEditing(true)}>edit</button></td>
            <td>{name}</td>
            <td>{qty}</td>
            <td>{value}</td>
            <td>{type}</td>
        </tr>
    )
}