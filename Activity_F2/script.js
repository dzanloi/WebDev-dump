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
    document.order.total.value=(s1 + s2 + s3).toFixed(2);
}

function order_price() {
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
    var product_ok = true;
    if (document.order.sub1.value === "0.00") product_ok = false;
    if (document.order.sub2.value === "0.00") product_ok = false;
    if (document.order.sub3.value === "0.00") product_ok = false;
 
    var shipping_ok = true;
    if (document.querySelector('.shipping-address .sname').value === "") shipping_ok = false;
    if (document.querySelector('.shipping-address .sstreet').value === "") shipping_ok = false;
    if (document.querySelector('.shipping-address .scity').value === "") shipping_ok = false;
    if (document.querySelector('.shipping-address .szip').value === "") shipping_ok = false;
   
    var billing_ok = true;
    if (document.order.bname.value === "") billing_ok = false;
    if (document.order.bstreet.value === "") billing_ok = false;
    if (document.order.bcity.value === "") billing_ok = false;
    if (document.order.bzip.value === "") billing_ok = false;
 
    var credit_ok = true;
    if (document.order.cname.value === "") credit_ok = false;
    if (document.order.cnumber.value === "") credit_ok = false;
    var cardchecked = false;
    for (var i = 0; i <= 5; i++) {
        if (document.order.ccard[i].checked) cardchecked = true;
    }
    if (cardchecked === false) credit_ok = false;
 
    var payment_ok = credit_ok || billing_ok;
    var form_ok = product_ok && shipping_ok && billing_ok && credit_ok;
    var form_ok_slight = product_ok && shipping_ok && payment_ok; //if creditcb is unchecked
 
    if (form_ok_slight) {
        alert("Your order has been submitted");
    } else {
        if (product_ok === false) alert("Select a product, quantity, and shipping method");
        if (shipping_ok === false) alert("Enter a shipping address");
        if (payment_ok === false) alert("Enter a billing address or credit card");
    }
    return form_ok_slight;
}