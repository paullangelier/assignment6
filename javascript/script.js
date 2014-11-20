    function signIn() {
        alert("Thanks for signing in!");
    }

    function signUp() {
        var name = prompt("What is your email address?", "Type your email address here");
        var message = "Thanks for signing up, " + name + ".";
        document.getElementById("output-here").innerHTML = message;
    }