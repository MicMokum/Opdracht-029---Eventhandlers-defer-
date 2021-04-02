var myButton = document.getElementById("mybutton");
var yourButton = document.getElementById("yourbutton");

console.log(myButton);
console.log(yourButton);

myButton.addEventListener("click", function () {
  alert("myButton clicked!");
});

const toggleColor = function () {
  document.body.classList.toggle("blue-background");
  document.body.classList.toggle("red-background");
};

yourButton.addEventListener("click", function () {
  toggleColor();
});
