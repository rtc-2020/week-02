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

function wait(time) {
  return new Promise(function(resolve,reject) {
    setTimeout(resolve, time);
  });
}

// Old-school callback-style async
setTimeout(function(){
  console.log('Hey, I waited a second, too!')
}, 1000);

// New-school promisified setTimeout
wait(1000)
  .then(function(result) {
    console.log('Hey! I waited at least a second');
  });

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
