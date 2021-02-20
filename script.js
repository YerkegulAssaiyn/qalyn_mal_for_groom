document.getElementById("demo").innerHTML = "Qalyn mal calculator";
document.getElementById("education").style.color = "blue";
document.getElementById("networth").style.color = "green";

var button = document.getElementById("resultButton");
button.addEventListener("click", calculate);

function first() {
    var education = document.getElementById("education").value;

    if (education == "bachelor") {
        result = 500 * 1.5;
    } else if (education == "college") {
        result = 500 * 1.2;
    } else if (education == "high_school") {
        result = 500 * 1.05;
    } else if (education == "middle_school") {
        result = 500 * 0.9;
    }
}

function second() {
    var networth = document.getElementById("networth").value;

    if (networth == "upper_class") {
        result *= 2;
    } else if (networth == "middle_class") {
        result *= 1.5;
    } else if (networth == "lower_class") {
        result += 100;
    }
}

function others(id) {
    var options = document.getElementsByName(id);

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            if (id == "skills") {
                calculating_skills(Number(options[i].value));
            } else if (id = "age") {
                calculating_age(Number(options[i].value));
            } else if (id == "reputation") {
                calculating_gossips(Number(options[i].value));
            }
        }
    }
}

function calculating_skills(skill) {
    result += skill;
}

function calculating_age(age) {
    result *= age;  
  }

function calculating_gossips(gossips) {
    if (gossips == 0.85 || gossips == 0.9) {
        result += 500 * gossips;
    } else if (gossips == 200) {
        result -= 200;
    }
}

function calculate() {
    first();
    second();
    others("skills");
    others("age");
    others("reputation");
    alert (result + "$");
}