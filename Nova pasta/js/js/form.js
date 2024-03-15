function validaFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmSenha = document.getElementById('confirmSenha').value;

 
  if (nome === '' || email === '' || senha === '' || confirmSenha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
  }

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
  }

  
  if (senha.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
  }

 
  if (confirmSenha !== senha) {
      alert("As senhas não coincidem.");
      return;
  }
}