/* The following should be a file in your js or script folder */
function displayHypotenuse() {
    // Clear the results and errors
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";

    var errorflag = false; // an error has occurred
    var leg1; // string representation of the leg1
    var leg1fp; // floating point value of leg1
    var leg2; // string representation of the leg1
    var leg2fp; // floating point value of leg1
    var hypotenuse;  // floating point hypotenuse
    var result; // displayable result

    // Read in the Leg 1 as a string
    leg1 = document.getElementById("leg1").value;

    // Leg 1 is Required
    if (leg1 == "") {
        document.getElementById("leg1error").innerHTML = "Leg 1 is Required";
        errorflag = true;
    }

    // Leg 1 must be a floating point number
    if (isNaN(leg1)) {
        document.getElementById("leg1error").innerHTML = "Leg 1 Must be a Floating Point Number";
        errorflag = true;
    } else {

        // Convert Leg 1 to a floating point number
        leg1fp = parseFloat(leg1); 

        // Leg 1 must be a positive number
        if (leg1fp <= 0) {
            document.getElementById("leg1error").innerHTML = "Leg 1 Must be a Positive Number";
            errorflag = true;
        }
    }

    // Read in Leg 2 as a string
    leg2 = document.getElementById("leg2").value;

    // Leg 2 is Required
    if (leg2 == "") {
        document.getElementById("leg2error").innerHTML = "Leg 2 is Required";
        errorflag = true;
    }

    // Leg 2 must be a floating point number
    if (isNaN(leg2)) {
        document.getElementById("leg2error").innerHTML = "Leg 2 Must be a Floating Point Number";
        errorflag = true;
    } else {

        // Convert Leg 2 to a floating point number
        leg2fp = parseFloat(leg2); 

        // Leg 1 must be a positive number
        if (leg2fp <= 0) {
            document.getElementById("leg2error").innerHTML = "Leg 2 Must be a Positive Number";
            errorflag = true;
        }
        // if no error, calculate and display the hypotenuse
        if (!errorflag) {
            hypotenuse = calcHypotenuse(leg1fp, leg2fp);
            document.getElementById("hypotenuse").innerHTML = hypotenuse.toString();
        }
    }
}

function calcHypotenuse (leg1value, leg2value) {
// returns hypotenuse of a right triangle
// square root of leg1 squared plus leg2 squared

    return Math.sqrt((leg1value*leg1value) + (leg2value*leg2value));
}
          
    function clearForm() {
    document.getElementById("leg1").value = "";
    document.getElementById("leg1error").innerHTML = "";
    document.getElementById("leg2").value = "";
    document.getElementById("leg2error").innerHTML = "";
    document.getElementById("hypotenuse").innerHTML = "";
} 