var acc = document.getElementsByClassName("accordion")
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var answer = document.querySelector('.answer')

       
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}

// document.querySelector('.form-button').addEventListener("click", function () {
//     var input = document.getElementById("messageInput");
//     var message = input.value;
    
//     if (message) {
//       var messageDescr = document.querySelector('.messageDescr');
//       messageDescr.textContent = message;
//       messageDescr.style.display = "block";
//     }
//   });

const burgerBtn = document.querySelector('.burger-img');
const menu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});


