// esta linkado ao html
const socket = io('http://localhost:3000')


socket.on('connect_user', (messages) => {//1-update_messages escuta

    console.log(messages.msg)
    socket.emit('obgdoBack',{msg:"obgdo por receber o user"})
    
    socket.on('recebeUser',(data)=>{
        console.log(data.msg)
    })

})

socket.on('five',(data)=>{
    five()
    function five(){
        console.log(data.msg)
        // 5 seg
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, 5000);
    } 
})
////////////////////////////////////////////////////
socket.on('one',(data)=>{
    one()
    function one(){
        console.log(data.msg)
        // 1 dia
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, 1000);
    }
})

socket.on('ten',(data)=>{
    ten()
    function ten(){
        console.log(data.msg)
        // 10 seg
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, 10000);
        
    }
})

socket.on('Tm',(Ts)=>{
    Hm()
    function Hm(){
        console.log(Ts)
        console.log("Executando o que foi enviado como TimeStamp")
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, Ts.totalHm);
        console.log(Ts)
    }
})