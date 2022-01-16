var emailInput = document.getElementById('email');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log(emailInput.value);
});