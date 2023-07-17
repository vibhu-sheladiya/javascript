
let total = [];
function AddBudgetBtn() {
    let addbud = parseInt(document.getElementById("AddBudgetInput").value);

    if (addbud == "") {
        alert("Enter Amount")
    } else if (isNaN(addbud)) {
        alert("Enter Amount (Only NUMBER)")
    }
    total.push(addbud)
    let call = callTotal();

    let log = document.getElementById("t0").innerHTML = call;
    let val = document.getElementById("t2").innerHTML = call;

    function callTotal() {
        var value = 0;
        for (let i = 0; i < total.length; i++) {
            value += total[i]
        }
        return value;
    }
    document.getElementById("AddBudgetInput").value = "";

}


function ExAdd() {

    let val = parseInt(prompt("Enter Amount"));

    total.push(val)

    var call = callTotal();

    function callTotal() {
        var value = 0;
        for (let i = 0; i < total.length; i++) {
            value += total[i]
        }
        return value;
    }



    document.getElementById("t0").innerHTML = call;
    document.getElementById("t2").innerHTML = call;

}

let Expend = [];

function callExpend() {
    let sum = 0;
    for (let i = 0; i < Expend.length; i++) {
        sum += Expend[i];
    }
    return sum;
}
function callTotal() {
    var value = 0;
    for (let i = 0; i < total.length; i++) {
        value += total[i]
    }
    return value;
}
let Edit2 = document.getElementById("t2");
function show() {
    let callEx = callExpend(); 
    let call = callTotal()
    let sum = call - callEx;
    Edit2.innerHTML = sum;

}

function AddProBtn() {
    let productPrice = parseInt(document.getElementById("ExTetx1").value);

    if (productPrice == 0) {
        alert("Enter Amount")
    } else if (isNaN(productPrice)) {
        alert("Enter Amount (Only NUMBER)")
    }

    Expend.push(productPrice)

    let callEx = callExpend();



    let call = callTotal()

    let val = document.getElementById("t2").innerHTML = call;
    let dic = val - callEx;

    function err() {
        if (dic < 0) {
            alert("Enter Amount ()")
            console.error("Enter valde Amount")
            document.getElementById("t2").innerHTML = call;
            let Edit = document.getElementById("t2");
            Edit.innerHTML = "Value is < 0";
            Edit.style.color = "red";
        }
        else {
            Edit2.innerHTML = dic;
            Edit2.style.color = "green";
        }


    }
    err();

    document.getElementById("t1").innerHTML = callEx;
    // document.getElementById("ExTetx1").value = "";
    // document.getElementById("ExTetx").value = "";
    inset();
}

let print = [];

inset = () => {

    // let ExId = document.getElementById(`ExTetxId`).value;
    let Ex = document.getElementById(`ExTetx`).value;
    let Am = document.getElementById(`ExTetx1`).value;

    let obj = {
        userId: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        userExpend: Ex,
        userAmount: Am
    }
    console.log(obj.userId);
    if (localStorage.getItem('expend') == null) {
        print.push(obj);
        localStorage.setItem('expend', JSON.stringify(print))
        view()
    } else {
        let val = JSON.parse(localStorage.getItem('expend'))
        val.push(obj)
        localStorage.setItem('expend', JSON.stringify(val))
        view()
    }

    document.getElementById("ExTetx").value = "";
    document.getElementById("ExTetx1").value = "";

    view()
}

view = () => {
    let val = JSON.parse(localStorage.getItem('expend'))
    let tbl = '';

    for (i in val) {
        tbl += `
        <tr>
            <td>${val[i].userExpend}</td>
            <td>${val[i].userAmount}</td>
            <td>
                <button onclick='del(${val[i].userId})'>Delete</button>
                <button onclick='edit(${val[i].userId})'>Edit</button>
            </td>
        </tr>`
    }
    document.getElementById('rec').innerHTML = tbl;
}
view();

del = (userId) => {
    let val = JSON.parse(localStorage.getItem('expend'))

    for (i in val) {
        if (val[i].userId == userId) {
            console.log(val[i].userId);
            val.splice(i, 1)
        }
        localStorage.setItem('expend', JSON.stringify(val))
    }
    view();
}

edit = (id) => {
    document.getElementById('s').style.display = 'none'
    document.getElementById('u').style.display = 'block'

    let val = JSON.parse(localStorage.getItem('expend'))

    if (val[i].userId == id) {
        document.getElementById('storeid').value = val[i].userId
        document.getElementById(`ExTetx`).value = val[i].userExpend;
        document.getElementById(`ExTetx1`).value = val[i].userAmount;
    }
}

update = () => {

    // let id = JSON.parse(localStorage.getItem('expend')); 
    let n = document.getElementById('ExTetx').value
    let e = document.getElementById('ExTetx1').value
    let storeid = document.getElementById('storeid').value
    console.log(storeid);

    let val = JSON.parse(localStorage.getItem('expend'))

    for (i in val) {
        if (val[i].userId == storeid) {
            val[i].userExpend = n;
            val[i].userAmount = e;
        }
    }
    localStorage.setItem('expend', JSON.stringify(val))
    alert('Your Record Sucessfully Updated')
    document.getElementById(`ExTetx`).value = "";
    document.getElementById(`ExTetx1`).value = "";
    document.getElementById('s').style.display = 'block'
    document.getElementById('u').style.display = 'none'
    view()
}