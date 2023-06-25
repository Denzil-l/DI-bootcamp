const button = document.querySelector('#lib-button');

button.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission and page refresh

  let noun = document.getElementById('noun').value;
  let adjective = document.getElementById('adjective').value;
  let verb = document.getElementById('verb').value;
  let person = document.getElementById('person').value;
  let place = document.getElementById('place').value;

  if (!noun || !adjective || !verb || !person || !place) {
    alert('Not all inputs are filled');
  } else {
    noun = `This story tells us about ${noun}.`;
    adjective = `${noun} ${adjective}.`;
    verb = ` ${person} ${verb} this ${noun}.`;
    person = `${person} was born in ${place}.`;
    place = `${place} is awful.`;

    let array = [noun, adjective, verb, person, place];
    let numbers = [];
    let str = [];

    for (let i = 0; i < 5; i++) {
      let x;
      do {
        x = Math.floor(Math.random() * 5);
      } while (numbers.indexOf(x) !== -1);
      numbers.push(x);
      str.push(array[x]);
    }

    str = str.join('');
    document.getElementById('story').textContent = str;
  }
});