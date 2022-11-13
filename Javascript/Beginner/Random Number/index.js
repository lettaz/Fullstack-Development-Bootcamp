let a;
let b;

let rollBtn = document.getElementById("rollBtn");

rollBtn.onclick = function(){
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;

    document.getElementById("result1").innerHTML = a;
    document.getElementById("result2").innerHTML = b;
}