function validate() {
    if (document.getElementById('y').checked) {
        document.getElementById('y').onclick = function () {
            showDiv('y')
        };
    }
    else if (document.getElementById('na').checked) {
        document.getElementById('na').onclick = function () {
            showDiv('na')
        };
    }
}

function showDiv(action) {
    if (action == 'y') {
        document.getElementById('onclickYes').style.display = "block";
        hideDiv('na')
    }
    else if (action == 'na') {
        document.getElementById('onclickNA').style.display = "block";
        hideDiv('y')
    }
}

function hideDiv(action) {
    if (action == 'y') {
        document.getElementById('onclickYes').style.display = "none";
    }
    else if (action == 'na') {
        document.getElementById('onclickNA').style.display = "none";
    }
}