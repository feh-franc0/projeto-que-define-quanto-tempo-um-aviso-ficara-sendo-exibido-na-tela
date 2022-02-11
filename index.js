// node index.js 

const express = require('express');
const app = express();
const path = require('path');
const { emit } = require('process');
const socketIo = require('socket.io')

app.use('/', express.static(path.join(__dirname, 'public')))


const server = app.listen(3000, () => {
    console.log("Running")
})

// Servidor transações
const io = socketIo(server);
io.on('connection', (socket) => { // abre a escuta de eventos 

        socket.emit('hello', {msg:"tudo certo!"}); //1-update_messages envia

        socket.emit('connect_user', {msg:"Enviar pro user"})
     
        socket.on('enviar', (data)=>{
            console.log(data.msg);
        })

        socket.on('obgdoBack', (data)=>{
            console.log(data.msg);
        })

        //mandar executar as funçoes
        socket.on('funcao',(data)=>{
            console.log(data.msg)
            io.emit('five', {msg:'executa 5 seg'})
        })
        socket.on('funcaomenor',(data)=>{
            console.log(data.msg)
            io.emit('one', {msg:'executa 1 seg'})
        })
        socket.on('funcaomaior',(data)=>{
            console.log(data.msg)
            io.emit('ten', {msg:'executa 10 seg'})
        })
        socket.on('enviaTSdoUser',(Ts)=>{
            console.log(Ts)
            io.emit('Tm',(Ts))
        })
        
       



})//fecha escuta de eventos