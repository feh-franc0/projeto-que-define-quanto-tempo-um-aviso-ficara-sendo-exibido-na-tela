// esta linkado ao html
const socket = io('http://localhost:3000')

socket.on('hello', (messages) => {//1-update_messages escuta

    console.log(messages.msg)
    socket.emit('enviar',{msg:"enviado pro back"})
    // updateMessagesOnScreen() //executa a funcao
    // socket.emit('chegouNoUser')

})

function envio(){
    socket.emit('funcao', {msg:"recebi a funcao"})
}
function envioMenor(){
    socket.emit('funcaomenor', {msg:"recebi a funcao"})
}
function envioMaior(){
    socket.emit('funcaomaior', {msg:"recebi a funcao"})
}
///////////////


///////////////////////////////////////////////////
function cancel(){
    document.getElementById("erro").style.display = "none";
}
function one(){
    // 1 dia
    document.getElementById("erro").style.display = "block";
    setTimeout(function() {
        document.getElementById("erro").style.display = "none";
    }, 1000);
    
}function thirty(){
    // 20 seg
    document.getElementById("erro").style.display = "block";
    setTimeout(function() {
        document.getElementById("erro").style.display = "none";
    }, 30000);
    
}function ten(){
    // 10 seg
    document.getElementById("erro").style.display = "block";
    setTimeout(function() {
        document.getElementById("erro").style.display = "none";
    }, 10000);
    
}function five(){
    // 5 seg
    document.getElementById("erro").style.display = "block";
    setTimeout(function() {
        document.getElementById("erro").style.display = "none";
    }, 5000);
    
}function hide(){
    document.getElementById("erro").style.display = "none";
}

////////////////////////////////////////////////////////////////
// Config para pegar o valor de hora e minuto

//id do input submit
const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    // id do campo de escrita
    const name = document.querySelector("#appt");

    const value = name.value;

    console.log(value);

    const array = value.split(":")

    console.log(array)
    console.log(array[0])
    console.log(array[1])

    var timeHora = array[0]*(60*(60*1000))
    var timeMin = array[1]*(60*1000)

    console.log(timeHora)
    console.log(timeMin)

    var totalHm = timeHora + timeMin

    Hm()

    function Hm(){
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, totalHm);
        
        console.log(totalHm)
        enviaUser()
        function enviaUser(){
            socket.emit('enviaTSdoUser', {totalHm})
        }
    }
    
});



// const texto = "Temos uma string aqui";
// const array = texto.split(" ");
// console.log(array); // ["Temos", "uma", "string", "aqui"];