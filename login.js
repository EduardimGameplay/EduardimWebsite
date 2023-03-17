function validarSenha() {
    var user = document.querySelector("input[type=email]").value;
    var senha = document.getElementById("senha").value;
    var mensagem = document.getElementById("mensagem");
    if (user === "eduardo" && senha === "84869")  {
      mensagem.style.display = "none";
      window.location.href = "index.html";
    } else {
      mensagem.style.display = "block";
      mensagem.innerHTML = "E-mail ou senha incorretos";
    }
  }