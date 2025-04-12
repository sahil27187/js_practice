// Select all the buttons with the class "button"
const buttons = document.querySelectorAll('.button');

// Select the body element
const body = document.querySelector('body'); // Corrected this line
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
// Add event listeners to each button
buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
      h1.style.color = 'black';
      h2.style.color = 'black';
    } else if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    } else if (event.target.id === 'green') {
      body.style.backgroundColor = event.target.id;
    }
  });
});
