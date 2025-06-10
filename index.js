import express from 'express'
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server Initiallized | Ubuntu 24.04 Noble Numbat');
});

let dataArray = [];

app.post('/sendData', async (req, res) => {
    const todoData = await req.body;

    if (!todoData) {
        return res.status(400).json({ status: 'Failed to Receive' });
    }

    dataArray.push(todoData);
    console.log(dataArray)
    return res.status(200).json({ message: 'Data Sent' })
});

app.delete('/deleteData/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const index = dataArray.findIndex(item => item.id === idToDelete);

    if (index == -1) {
        return res.status(404).json({ message: 'Item not Deleted' });
    }

    dataArray.splice(index, 1);
    console.log('Remaing Items', dataArray);
    return res.status(200).json({ message: 'Item Deleted' });
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})