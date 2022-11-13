let count = 0;
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.onclick = function(){
    count = count + 1;
    //or count += 1
    document.getElementById("countLabel").innerHTML = count;
}
resetBtn.onclick = function(){
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
decreaseBtn.onclick = function(){
    count = count - 1;
    //or count -= 1
    document.getElementById("countLabel").innerHTML = count;
}

