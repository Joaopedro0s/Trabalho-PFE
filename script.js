// Evento de clique simples
document.getElementById("butao")
.addEventListener("click", function(){
    alert("Você clicou no botão!");
});

// Evento de duplo clique
document.getElementById("double")
.addEventListener("dblclick", function(){
    alert("Você clicou duas vezes!");
});

// Evento de mouseover
document.getElementById("passar")
.addEventListener("mouseover", function(){
    alert("Mouse passou por cima!");
});

// Evento de mouseout
document.getElementById("sair")
.addEventListener("mouseout", function(){
    alert("Mouse saiu de cima do botão!");
});

// Evento de keydown
document.addEventListener("keydown", () => {
    const btn = document.getElementById("keydown");
    btn.classList.add("pressionado");
});

// Evento de keyup
document.addEventListener("keyup", () => {
    const btn = document.getElementById("keyup");
    btn.classList.add("solto");

    setTimeout(() => {
        btn.classList.remove("solto");
        document.getElementById("keydown").classList.remove("pressionado");
    }, 500);
    
});

// Evento de input
const campo = document.getElementById("campoTexto");
const saida = document.getElementById("saida");

campo.addEventListener("input", function () {
  saida.textContent = "Você digitou: " + campo.value;
});

// Evento de change
document.getElementById("nome").addEventListener("change", function() {
    saida.textContent = "Você terminou de digitar: " + this.value;
});

// Eventos de focus e blur
document.getElementById("meuCampo").addEventListener("focus", function () {
    document.getElementById("mensagem").textContent = "O campo foi focado!";
});

document.getElementById("meuCampo").addEventListener("blur", function () {
    document.getElementById("mensagem").textContent = "Você saiu do campo!";
});

// Evento de submit do formulário
document.getElementById("meuFormulario").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nomeForm").value;
    const email = document.getElementById("emailForm").value;
    const mensagem = document.getElementById("mensagemForm").value;
    
    document.getElementById("formStatus").textContent = `Obrigado, ${nome}! Sua mensagem foi enviada.`;
    document.getElementById("formStatus").style.color = "green";
    
    
    // Limpa o formulário
    this.reset();
});

// Evento de load
window.addEventListener("load", function (event) {
    logEvent("Página totalmente carregada");
});

// Evento de resize
window.addEventListener('resize', function() {
    logEvent(`Janela redimensionada: Largura: ${window.innerWidth}, Altura: ${window.innerHeight}`);
});

// Função para registrar eventos no log
function logEvent(message) {
    const eventLog = document.getElementById("eventLog");
    const timestamp = new Date().toLocaleTimeString();
    eventLog.innerHTML += `[${timestamp}] ${message}<br>`;
    eventLog.scrollTop = eventLog.scrollHeight;
}