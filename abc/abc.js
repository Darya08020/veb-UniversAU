let check = false;
function verify() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let low, high;
    if (a < b) { low = a;    high = b;  }
    else { low = b; high = a; }

    let result;
    if (c >= low && c <= high) {
        result = "С принадлежит заданному диапазону";
        check = true;
    } 
    else {
        result = "С не принадлежит заданному диапазону";
        check = false;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

const elementA = document.getElementById("a");
const elementB = document.getElementById("b");
const elementC = document.getElementById("c");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
