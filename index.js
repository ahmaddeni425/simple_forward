const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/callback', async (req, res) => {
    const { req_url, req_body } = req.body;  

    res.json({
        code: 0,
        message: 'success',
        data: null
    });

    try {
        const response = await axios.post(req_url, req_body); 
        console.log('Data berhasil dikirim:', response.data);
    } catch (error) {
        console.error('Error saat mengirim request:', error);
    }
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
