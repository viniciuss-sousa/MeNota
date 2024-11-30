const form = document.getElementById('formCadastro');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Validação básica (adicione mais validações conforme necessário)
  if (email === '' || senha === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Envio dos dados para o servidor (exemplo com fetch)
  fetch('/seu-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, senha })
  })
  .then(response => {
    if (response.ok) {
      alert('Cadastro realizado com sucesso!');
    } else {
      alert('Erro ao realizar o cadastro.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
  });
});