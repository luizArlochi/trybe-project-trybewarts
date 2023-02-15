const emailInput = document.getElementById('email');
const passwordInput = document.querySelector('input[name="password"]');
const loginButton = document.querySelector('button');

function loginValidate(event) {
  event.preventDefault();
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

loginButton.addEventListener('click', loginValidate);
