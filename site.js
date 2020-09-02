if ('fetch' in window) {
  fetch('https://api.github.com/users/karlstolley')
    .then(function(result) {
      return result.json();
    })
    .then(function(result) {
      console.log('The username we returned is ' + result.login);
    })
    .catch(function(error) {
      console.error('Error:' + error.msg);
    });
}


/*
document.addEventListener('DOMContentLoaded', function(){
  console.log('The DOM is ready for action');
});

(function(){

  var h1 = document.querySelector('h1');

  h1.addEventListener('click', function() {
    h1.innerText = "Someone clicked me!"
  });

})();


console.log("Odds are, the DOM is loaded because I'm at the very end")

console.log("One");
setTimeout(function() {
    console.log("Two")
  }, 5000);
console.log("Buckle my shoe");
*/
