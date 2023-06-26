let p = document.querySelector('p')


document.addEventListener('keydown', function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        p.innerHTML += event.key
    }
  });