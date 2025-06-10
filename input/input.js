let welcomeText = document.getElementById("welcometxt");
let input = document.getElementById("input");
let enterBtn = document.getElementById("enterBtn");
let username;

enterBtn.onclick = function () {
    username = input.value;
    welcomeText.textContent = `welcome ${username}`
};