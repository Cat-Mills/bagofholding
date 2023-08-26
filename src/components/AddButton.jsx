import React from "react";

export default function AddButton({addClick}) {
    return (
        <tr>
            <td></td>
            <td colSpan='4'>
                <button id="addButton" onClick={addClick} >Add Item</button>
            </td>
        </tr>
    )
}