document.getElementById("meuForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Impede o envio padrão do formulário

      const campoA = parseInt(document.getElementById("campoA").value);
      const campoB = parseInt(document.getElementById("campoB").value);
      const mensagem = document.getElementById("mensagem");

      if (campoB > campoA) {
        mensagem.textContent = "Formulário válido!";
        mensagem.className = "message valid";
      } else {
        mensagem.textContent = "Formulário inválido. O número B deve ser maior que o número A.";
        mensagem.className = "message invalid";
      }
    });