
let TEST_ITEMS = [
    {id: 0, name: 'Hand Axe', qty: 2, value: 50, type: 'Weapon'},
    {id: 1, name: 'Torch', qty: 1, value: 10, type: 'Tool'},
    {id: 2, name: 'Jerky', qty: 5, value: 15, type: 'Food'},
]

let globalId = 3

const handlerFunctions = {

    //? Sends the Test items to the front end when getInventory is invoked.
    getInventory: (req,res) => {
        res.send(TEST_ITEMS)
    },

    addItem: (req,res) => {
        const {name} = req.body
        const {type} = req.body
        const {qty} = req.body
        const {value} = req.body

        const newItem = {
            id: globalId,
            name: name,
            qty: qty,
            value: value,
            type: type
        }
        TEST_ITEMS.push(newItem)
        globalId++
        res.send(newItem)
    },

    deleteItem: (req,res) => {
        const {id} = req.params

        let filteredList = TEST_ITEMS.filter(el => el.id !== +id)
        TEST_ITEMS = filteredList
        res.send('Item removed')
    },

    editItem: (req,res) => {
        const {id} = req.params
        const {name,qty,value,type} = req.body
        let index = TEST_ITEMS.findIndex(el => el.id === +id)
        let item = TEST_ITEMS[index]

        item.name = name ?? item.name
        item.qty = +(qty ?? item.qty)
        item.value = +(value ?? item.value)
        item.type = type ?? item.type

        res.send(item)
    }
}

export default handlerFunctions