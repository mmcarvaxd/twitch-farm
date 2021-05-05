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