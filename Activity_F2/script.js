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