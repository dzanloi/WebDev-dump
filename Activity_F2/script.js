function shownum(value) {
    let total_input = document.getElementById(`total`);
    let sub1_input = document.getElementById(`sub1`);
    let sub2_input = document.getElementById(`sub2`);
    let sub3_input = document.getElementById(`sub3`);
    sub3_input.value = value;

    let total = 0;
    total = sub1_input.value + sub2_input.value + sub3_input.value;
    total_input.value = total;
}

function clickeed() {
    alert(`Ayaw kol, bata pako kolllllll`);
}

function getTotal() {
    var product = document.querySelector(`.products`).value;
    var quantity = document.querySelector(`.qty`).value;

    var prices = {
        'GoMap 1.0': 19.95,
        'Drive Planner 2.0': 29.95,
        'Hiker 1.0': 29.95,
        'G-Receiver I': 149.50,
        'G-Receiver II': 199.50,
        'G-Receiver III': 249.50
    };

    var total = prices[product] * quantity;
    document.getElementById('sub1').value = total.value;
}

function cancel() {
    let body = document.querySelectorAll;
    body.value = 0;
}

function sabmit() {
    alert(`Form Successfully submitted`);
}