function checkAge() {
    let age = document.getElementById("age").value;

    // We add Number() to make sure the computer treats the input as a digit
    if (Number(age) >= 18) { 
        document.getElementById("sagot").innerHTML="Status: You're an adult";
        // window.alert("You are an adult."); 
    } 
    // else {
    //     window.alert("You are still a minor.");
    // }
}