function validation() {
    var name = document.getElementById("name").value.trim();
    var age = document.getElementById("age").value.trim();
    var city = document.getElementById("city").value.trim();

    var valid_name_regex = /^[A-Za-z]+$/;
    var valid_age_regex = /^[0-9]+$/;

    var isValid = true;

    // Name validation
    if (!valid_name_regex.test(name)) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("name").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("name").style.borderColor = "black";
    }

    // Age validation
    if (!valid_age_regex.test(age)) {
        document.getElementById("age_error").style.visibility = "visible";
        document.getElementById("age").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("age_error").style.visibility = "hidden";
        document.getElementById("age").style.borderColor = "black";
    }

    // City validation
    if (city === "") {
        document.getElementById("city_error").style.visibility = "visible";
        document.getElementById("city").style.borderColor = "red";
        isValid = false;
    } else {
        document.getElementById("city_error").style.visibility = "hidden";
        document.getElementById("city").style.borderColor = "black";
    }

    return isValid;
}
