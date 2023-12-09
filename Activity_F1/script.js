function myFunction() {
    var name = document.getElementById("name");
    alert("Hi, " + name.value);

    var email = document.getElementById("email");
    alert("Your email is " + email.value);

    var number = document.getElementById("number");
    alert("Your number is " + number.value);

    var subject = document.getElementById("subject");
    alert("Your subject matter is regarding to " + subject.value + " right?");


    if(document.getElementById("message").value) {
        alert("Message submitted, we will look forward to that subject matter as soon as possible");
    } else {
        prompt("Please enter a message/comments: ");
    }
}