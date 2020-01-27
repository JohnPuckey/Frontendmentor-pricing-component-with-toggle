const month = document.querySelectorAll(".monthly");
const year = document.querySelectorAll(".annually");
const checkBox = document.getElementById("switch")

function change() {
    removeShow();
    if(checkBox.checked) {
        month.forEach(item => item.classList.add('show'))
    } else {
        year.forEach(item => item.classList.add('show'))
    }
}

function removeShow() {
month.forEach(item => item.classList.remove('show'))
year.forEach(item => item.classList.remove('show'))
}
