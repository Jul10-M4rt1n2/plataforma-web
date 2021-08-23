function login(e) {
  e.preventDefault();
  const email = document.forms[0].email.value;
  const password = document.forms[0].password.value;

  if (email === "usuario@conectar.com.br" && password === "12345678") {
    alert("Login com sucesso, usuário logado");
  } else {
    alert("Credenciais inválidos");
  }
}
