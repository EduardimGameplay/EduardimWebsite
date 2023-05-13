function validarSenha() {
  var user = document.querySelector("input[type=email]").value;
  var senha = document.getElementById("senha").value;
  var mensagem = document.getElementById("mensagem");

  if (user === "eduardim" && senha === "84869") {
      mensagem.style.display = "none";
      window.location.href = "login.html";
  } else if (user === "declaration-of-love" && senha === "for2088") {
      mensagem.style.display = "none";
      window.location.href = "login.html";
  } else if (user === "user2" && senha === "54321") {
      mensagem.style.display = "none";
      window.location.href = "login.html";
  } else {
      mensagem.style.display = "block";
      mensagem.innerHTML = "E-mail ou senha incorretos";
  }
}
