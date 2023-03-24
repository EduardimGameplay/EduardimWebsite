function validarSenha() {
  var user = document.querySelector("input[type=email]").value;
  var senha = document.getElementById("senha").value;
  var mensagem = document.getElementById("mensagem");

  if (user === "eduardim" && senha === "84869") {
      mensagem.style.display = "none";
      window.location.href = "login.html";
  } else if (user === "user1" && senha === "12345") {
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
