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
        // 5 seg
        document.getElementById("erro").style.display = "block";
        setTimeout(function() {
            document.getElementById("erro").style.display = "none";
        }, totalHm);
        
    }
    
});

// const texto = "Temos uma string aqui";
// const array = texto.split(" ");
// console.log(array); // ["Temos", "uma", "string", "aqui"];