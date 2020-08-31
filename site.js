document.addEventListener('DOMContentLoaded', function(){
  console.log('The DOM is ready for action');
})

var h1 = document.querySelector('h1');

h1.addEventListener('click', function() {
  h1.innerText = "Someone clicked me!"
});

console.log("Odds are, the DOM is loaded because I'm at the very end")

console.log("One");
setTimeout(function() {
    console.log("Two")
  }, 5000);
console.log("Buckle my shoe");
