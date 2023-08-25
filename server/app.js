//imports
import express from 'express';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import handlerFunctions from './controller.js';

//app instance
const app = express();
const port = '2222';

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json())

// ViteExpress.config({ printViteDevServerHost: true });

// Routes go here
const {addItem, deleteItem, editItem, getInventory} = handlerFunctions

app.get('/inventory', getInventory)
app.post('/addItem', addItem)
app.delete('/removeItem/:id', deleteItem)
app.put('/editItem/:id', editItem)








ViteExpress.listen(app, port, () => console.log(`Investigation Check successful. You found http://localhost:${port}`));