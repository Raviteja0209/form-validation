function validate() {
    if (document.getElementById('y').checked) {
        document.getElementById('sub').onclick = function () {
            location.href = "userdata.html"
        };
        alert("data update successfully")
    }
    else if (document.getElementById('na').checked) {
        document.getElementById('sub').onclick = function () {
            location.href = "nonedit.html"
        };
    }
    else { 
       alert("please select one option")
    }
}