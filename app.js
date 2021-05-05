const tmi = require('tmi.js');

const opts = {
    identity: {
        username: process.env.username,
        password: process.env.password
    },
    channels: JSON.parse(process.env.channels)
};

const client = new tmi.client(opts);
client.on('connected', onConnectedHandler);

client.connect();

function onConnectedHandler(addr, port) {
    console.log(`* Connected to ${addr}:${port}`);

    let minutes = 0
    setInterval(()=> {
        minutes++
        console.clear();
        console.log(`Farm rodando a ${minutes} minuto(s)!`)
    }, 60000)
}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})