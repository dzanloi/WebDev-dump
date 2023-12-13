let sub1_input = document.getElementById(`sub1`);
let sub2_input = document.getElementById(`sub2`);
let sub3_input = document.getElementById(`sub3`);
let total_input = document.getElementById(`total`);
let total = 0;

function startForm() {
    let Today = new Date();
    document.order.formdate.value = Today.getMonth() + 1 + "/" + Today.getDate() + "/" + Today.getFullYear();
}

function getShipping(value) {
    sub3_input.value = value;
    getTotal();
}

function getTotal() {
    s1 = eval(document.order.sub1.value);
    s2 = eval(document.order.sub2.value);
    s3 = eval(document.order.sub3.value);
    document.order.total.value=(s1+s2+s3).toFixed(2);
}

function order_price(){
    item_index = document.order.product.selectedIndex;
    item_value = document.order.product.options[item_index].value;
    qty_ordered = document.order.qty.selectedIndex;
    document.order.sub1.value = item_value*qty_ordered.toFixed(2);
    document.order.sub2.value = (item_value*qty_ordered*0.05).toFixed(2);
    getTotal();
}


function clickeed() {
    alert(`Ayaw kol, bata pako kolllllll`);
}

function cancel() {
    let body = document.querySelectorAll;
    body.value = 0;
}

function sabmit() {
    alert(`Form Successfully submitted`);
}

