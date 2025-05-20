document.getElementById("butao")
.addEventListener("click", function(){
    alert("Clicado");
})

document.getElementById("double")
.addEventListener("dblclick", function(){
    alert("Clicado");
})

document.getElementById("passar")
.addEventListener("mouseover", function(){
    alert("Clicado");
})

document.getElementById("sair")
.addEventListener("mouseout", function(){
    alert("Clicado");
})

// Keydown - Pressionando qualquer tecla
document.addEventListener("keydown", () => {
    const btn = document.getElementById("keydown");
    btn.classList.add("pressionado");
});

// Keyup - Soltando a tecla
document.addEventListener("keyup", () => {
    const btn = document.getElementById("keyup");
    btn.classList.add("solto");

    // Remover o efeito após um tempo
    setTimeout(() => {
        btn.classList.remove("solto");
        document.getElementById("keydown").classList.remove("pressionado");
    }, 500);
});

const campo = document.getElementById("campoTexto");
const saida = document.getElementById("saida");

campo.addEventListener("input", function () {
  saida.textContent = "Você digitou: " + campo.value;
});

document.getElementById("nome").addEventListener("change", function() {
    saida.textContent = "Você terminou de digitar: " + this.value;
  });
  

