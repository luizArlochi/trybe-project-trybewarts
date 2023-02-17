// função que aguarda um evento (click) e executa a validação dos valores de 'email e 'password', retornando
// 'Olá, Tryber!' caso os valores sejam true, e 'Email ou senha inválidos' caso sejam false.

const emailInput = document.querySelector('input[name="email"]');
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

const submitBtn = document.getElementById('submit-btn');
submitBtn.disabled = true;

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }
});
