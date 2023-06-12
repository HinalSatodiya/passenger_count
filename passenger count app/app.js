let user = prompt("what is your name ??");
let message = "welcome to passenger count app !!"
message += "👋"
let usermessage = document.getElementById("welCome").innerText ;
welCome.innerText = user + ", " + message ;

let cnt = 0;
function increment(){
    document.getElementById("count").innerText = cnt ;
    cnt += 1;
    count.innerText = cnt;
}

function decrement(){
        if(cnt>0){
        cnt -= 1;
        count.innerText = cnt;
        }
        else{
            alert("count can't be less than 0");
        }
}

let total = 0;
function save(){
    total = " - " + cnt ;
    document.getElementById("list").innerText += total;
    cnt = 0;
    count.innerText = cnt;
}

