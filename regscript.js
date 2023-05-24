const form = document.querySelector('#registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first-name').value;
  const lastName = document.querySelector('#last-name').value;
  const mobileNumber = document.querySelector('#mobile-number').value;
  const work = document.querySelector('#work').value;
  const city = document.querySelector('#city').value;
  const age = document.querySelector('#age').value;
  const experience = document.querySelector('#experience').value;

  // Do something with the form data, like send it to a server or store it in a database
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`Mobile Number: ${mobileNumber}`);
  console.log(`Work You Do: ${work}`);
  console.log
