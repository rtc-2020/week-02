document.addEventListener('DOMContentLoaded', function(){
  console.log('The DOM is ready for action');
})

console.log("Odds are, the DOM is loaded because I'm at the very end")

console.log("One");
setTimeout(function() {
    console.log("Two")
  }, 5000);
console.log("Buckle my shoe");
