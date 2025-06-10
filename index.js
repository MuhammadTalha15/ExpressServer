import express from 'express'

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Server Initiallized | Ubuntu 24.04 Noble Numbat');
})

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
})